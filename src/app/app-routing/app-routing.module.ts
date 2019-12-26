import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {CustomerComponent} from '../customer/customer.component';
import {CreateCustomerComponent} from '../create-customer/create-customer.component';
import {EditCustomerComponent} from '../edit-customer/edit-customer.component';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'create',
    component: CreateCustomerComponent
  },
  {
    path: 'edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'delete/:id',
    component: DeleteCustomerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'customers',
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
