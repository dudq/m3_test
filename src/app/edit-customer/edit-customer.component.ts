import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service/customer.service';
import {Customer} from '../customer.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editForm: FormGroup;
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(next => {
        this.customer = next;
        this.editForm.patchValue(this.customer);
      },
      error => {
        this.customer = null;
        console.log(error);
        this.router.navigate(['not-found']);
      }
    );
  }

  onsubmit() {
    const {value} = this.editForm;
    this.customerService.updateCustomer(value).subscribe(next => {
      alert('Update successfully');
    });
  }
}
