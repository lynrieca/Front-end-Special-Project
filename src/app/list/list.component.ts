import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { removeSummaryDuplicates } from '@angular/compiler';
import { Input } from '@angular/core';
import * as $ from 'jquery';
import {Route, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  users : any;

  closeResult: string;
  dataToUpdate: any;

  constructor(private _userservice : UserRegistrationService,
    public http:HttpClient,
    private router:Router
    ) { }

  ngOnInit() {
    this._userservice.getUsers().subscribe((data:any) => {
      console.log(data.data, 'test');
      this.users = data.data;
    });
  }

  editUser($obj = {}){
    this.dataToUpdate = $obj;
  }

  closeModal(){
    $('#userModal').hide(1000);
  }

  getUser(user:any){
    console.log(user, 'selected_user');
    this.router.navigate(['/user', user.id]);
  }
}
