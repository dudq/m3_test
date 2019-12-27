import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerComponent} from './customer/customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {DeleteCustomerComponent} from './delete-customer/delete-customer.component';
import {BooksComponent} from './books/books.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {BookReadComponent} from './book-read/book-read.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    BooksComponent,
    CreateBookComponent,
    BookReadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
