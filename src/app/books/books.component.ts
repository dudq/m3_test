import {Component, OnInit} from '@angular/core';
import {Book} from '../book.interface';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  listBook: Book[];
  book: Book;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      next => (this.listBook = next),
      error => (this.listBook = [])
    );
  }

  onChange(i: number) {
    this.bookService.getBookById('' + i).subscribe(
      next => {
        this.book = next;
        this.book.read = true;
        this.bookService.updateBook(this.book).subscribe(() => alert('Update successfully'));
      },
      error => (this.listBook = []),
      () => {
        this.listBook[i].read = true;
      }
    );
  }
}
