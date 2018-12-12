import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;

  constructor(private _auth: AuthService, private router: Router , private  userService: UserService) {
    if(!this.user){
      this.user={};
    }
  }

  ngOnInit() {}

  registerUser(user) {
    this._auth.registerUser(user).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      error =>console.log(error)
    );
  }

}
