import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  private createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  onsubmit() {
    const {value} = this.createForm;
    this.customerService.createCustomer(value).subscribe(
      next => {
        alert('Create customer successfully');
        this.createForm.reset({
          firstName: [''],
          lastName: ['']
        });
      }
    );
  }
}
