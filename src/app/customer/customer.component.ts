import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer.interface';
import {CustomerService} from '../customer.service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      next => (this.listCustomer = next),
      error => (this.listCustomer = [])
    );
  }

}
