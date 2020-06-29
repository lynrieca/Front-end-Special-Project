import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path: 'user-registration', component: RegistrationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list', component: ListComponent},
  {path: 'update', component: UpdateUserComponent},
  {path: 'user/:id', component: SelectUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  RegistrationComponent,
  ListComponent,
  SelectUserComponent,
  RegisterComponent,
  UpdateUserComponent,
  
]

