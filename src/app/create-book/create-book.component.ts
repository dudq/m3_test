import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      id: [10],
      name: ['', [Validators.required]],
      read: [false]
    });
  }

  onsubmit() {
    const {value} = this.createForm;
    this.bookService.createBook(value).subscribe(
      next => {
        alert('Create book successfully');
        this.createForm.reset({
          name: ['']
        });
      }
    );
  }
}
