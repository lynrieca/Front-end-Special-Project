import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

import { UserRegistrationService } from '../user-registration.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user: any = {};

  constructor(private fb: FormBuilder,
              private _userservice : UserRegistrationService,
              public http: HttpClient,
              private _dialog : MatDialog) { }

  ngOnInit() {
    
  }

//   addUser(){ 
    // let $users = userForm.value;
    // if($users.name !== '' && $users.job !== ''){
    //   this._userservice.createUsers($users).subscribe(response => {
    //     console.log("User Addedd Successfully", response);
    //     userForm.form.reset();
    //   });
    // }
//     this._userservice.createUsers(this.user).subscribe((res)=>{
//       console.log("User Addedd Successfully", res);
//       let config: MatDialogConfig = {
//         width: '400px', data: {heading: 'Successfully Updated', 
//         data: res}
//       };
//       this._dialog.open(DialogComponent, config); 
//    }
// }

addUser(){
    this._userservice.createUsers(this.user).subscribe(res => {
        console.log(res, 'created_data');
        let resp = JSON.stringify(res);  
        console.log(resp, 'resp');
        let config: MatDialogConfig = {
            width: '400px', data: {heading: 'Successfully Created', 
            data: resp}
          };
          this._dialog.open(DialogComponent, config); 
        },
        error => console.log(error));
      } 
}
