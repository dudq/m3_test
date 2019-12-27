import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '../not-found/not-found.component';
import {BooksComponent} from '../books/books.component';
import {CreateBookComponent} from '../create-book/create-book.component';
import {BookReadComponent} from '../book-read/book-read.component';

const routes: Routes = [
  // {
  //   path: 'customers',
  //   component: CustomerComponent
  // },
  // {
  //   path: 'create',
  //   component: CreateCustomerComponent
  // },
  // {
  //   path: 'edit/:id',
  //   component: EditCustomerComponent
  // },
  // {
  //   path: 'delete/:id',
  //   component: DeleteCustomerComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'read',
    component: BookReadComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
