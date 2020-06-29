import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { UpdateUserService } from '../update-user.service';
import { UserRegistrationService } from '../user-registration.service';
import AWN from "awesome-notifications";
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponentExampleSnackComponent } from '../snack-bar-component-example-snack/snack-bar-component-example-snack.component';
import {PopupService} from '../popup.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

// import { AlertService } from '../_alert';
// import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUsers : any;
  errorMsg: any;
  alert:any;
  durationInSeconds:number = 1;

  // userId:number = 2;
  constructor(private _updateUserService : UpdateUserService,
    private _userservice : UserRegistrationService,
    private _snackBar : MatSnackBar,
    private _popup : PopupService,
    private _dialog : MatDialog
    ) { }

  ngOnInit() {
  }

  updateUser(userFormUpdate){
    let $users = userFormUpdate.value;
    if($users.name !== '' && $users.job !== ''){
      this._userservice.updateUser($users).subscribe(res => {
        console.log(res, 'test')
        let resp = JSON.stringify(res);  
        console.log(resp, 'resp');
        let config: MatDialogConfig = {
            width: '400px', data: {heading: 'Successfully Updated', 
            data: resp}
          };
          userFormUpdate.form.reset();
          this._dialog.open(DialogComponent, config); 
        },
        error => console.log(error));
      } 
  }

  deleteUser(){
    this._userservice.deleteUser(2).subscribe(res => 
        console.log('deleted'));
        let config: MatDialogConfig = {
          width: '400px', data: {heading: 'Successfully Deleted'}
        };
        this._dialog.open(DialogComponent, config);
        // this._alert.setMessage('All the fields are required','error');
        // this._parentsnack.deleteUser(this.errorMsg);
        // this._popup.sendClickEvent();
        // this._snackBar.openFromComponent(SnackBarComponentExampleSnackComponent,  {
        //     duration: this.durationInSeconds * 1000,
        // });
    }
}

