import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Customer} from '../customer.interface';
import {CustomerService} from '../customer.service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  deleteForm: FormGroup;
  customer: Customer;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.deleteForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(next => {
        this.customer = next;
        this.deleteForm.patchValue(this.customer);
      },
      error => {
        this.customer = null;
        this.router.navigate(['not-found']);
      });
  }

  onsubmit() {
    const choice = confirm('Are you sure');
    if (choice) {
      const {value} = this.deleteForm;
      this.customerService.deleteCustomer(value.id).subscribe(() => {
        alert('Deleted customer successfully');
        this.router.navigate(['']);
      });
    }
  }
}
