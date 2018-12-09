import { Component, OnInit } from '@angular/core';
import  {UserService } from "./user.service";
import  {User} from "./user";
import * as $ from 'jquery'
import {any} from "codelyzer/util/function";

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: User[];
  user: User;
  name: string;
  surname: string;
  username: string;
  password: string;

  constructor(private userService: UserService) { }              //dependency injection

  ngOnInit() {






    // this.userService.getUsers()
    //   .subscribe(users =>
    //   this.users = users);
  }

}
