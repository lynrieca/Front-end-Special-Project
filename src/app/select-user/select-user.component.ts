import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivationEnd} from '@angular/router';

import { UserRegistrationService } from '../user-registration.service';
import { Users } from '../users';
@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  selectedUser: Users[];
  constructor(private _userservice : UserRegistrationService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this._userservice.getUser(id).subscribe((data:any) => {
      console.log(data.data, 'test');
      this.selectedUser = data.data;
    });
  }

}
