import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor() { }
   
  //material form
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    job : new FormControl('', Validators.required),
  })

}
