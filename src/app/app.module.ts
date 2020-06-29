import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from "./material/material.module";
import { UserRegistrationService } from './user-registration.service';
// import { ListComponent } from './list/list.component';
// import { Component } from '@angular/Core';
// import { AlertsModule } from 'angular-alert-module';
//http
import { HttpClientModule } from '@angular/common/http';
import { SelectUserComponent } from './select-user/select-user.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { SnackBarComponentExampleSnackComponent } from './snack-bar-component-example-snack/snack-bar-component-example-snack.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SelectUserComponent,
    RegisterComponent,
    UpdateUserComponent,
    SnackBarComponentExampleSnackComponent,
    DialogComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SnackBarComponentExampleSnackComponent,
    DialogComponent
 ]
})
export class AppModule { }
