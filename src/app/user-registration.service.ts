import { Injectable, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as $ from "jquery";
import { Subject, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {throwError as observableThrowError, Observable} from 'rxjs';
import { Users } from './users';
import { Users2 } from './users';
import { Register } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService implements OnInit {
  userAdded = new Subject();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  //material form
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    job : new FormControl('', Validators.required),
    
  })


  
  getUser($userid:any) {
    return this.http.get(`https://reqres.in/api/users/${$userid}`).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    updateUser($user:any = {}){
        console.log($user, 'test');
        return this.http.put("https://reqres.in/api/users/2", $user).
            pipe(catchError( error => {
                return throwError( 'Something went wrong!' );
            })
        )
    }

    getUsers() {
    return this.http.get(`https://reqres.in/api/users`).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    createUsers(user: Users2[]) {
      return this.http.post(`https://reqres.in/api/users`,user).
          pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
    }

    registerUser($register: Register[]){
        return this.http.post("https://reqres.in/api/register", $register).pipe(
            map((data: any) => {
              return data;
            }), catchError( error => {
              return throwError( error );
            })
         )
    }

    deleteUser($id){
        const url = `https://reqres.in/api/users/${$id}`;
        return this.http.delete(url, {}).pipe(
            catchError(error => {
                return throwError('Something went wrong');
            })
        );
    }
}
