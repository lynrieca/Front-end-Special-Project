import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {PopupService} from '../popup.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.component.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class SnackBarComponentExampleSnackComponent implements OnInit {
  message:any;
  clickEventsubscription:Subscription;
  
  
  constructor(private _popup:PopupService) {
    this.clickEventsubscription =  this._popup.getClickEvent().subscribe(()=>{
      this.deleteUser('Successfully Deleted');
      console.log('hello world');
    })
  }
  ngOnInit() {
  }

  deleteUser(msg:any){
    console.log(msg, 'msg');
    this.message = msg;
    console.log(this.message, 'this.message')
  }

}
