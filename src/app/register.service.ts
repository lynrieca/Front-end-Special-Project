import { Injectable, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

   //material form
   form: FormGroup = new FormGroup({
    token : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })
}
