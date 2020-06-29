import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { UserRegistrationService } from '../user-registration.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  errorMsg: any;
  disableBtn: boolean = false;
  constructor(public registerservice:RegisterService,
    private _userservice: UserRegistrationService,
    private _dialog : MatDialog) { }

  ngOnInit() {
  }

  registerUser(){
    this.disableBtn = true; 
      this._userservice.registerUser(this.user).subscribe( response => {
        localStorage.setItem('token_registration', JSON.stringify(response))
        let config: MatDialogConfig = {
          width: '400px', data: {heading: 'Successfully Registered',
          data : JSON.stringify(response)}
        };
        this._dialog.open(DialogComponent, config);
        // registerForm.form.reset()
      },
      error => this.errorMsg = error.error.error);
    
    this.disableBtn = false;
  }



}
