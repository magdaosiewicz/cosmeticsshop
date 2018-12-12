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
  user:User;
  success: boolean;

  constructor(private authService: AuthService) {
    if(!this.user){
      this.user={};
    }
  }

  ngOnInit() {
    this.success = false;
  }

  registerUser() {
    this.authService.registerUser(this.user).subscribe(
      res => {
        this.success = true;
        localStorage.setItem('token', res.token);
        console.log(this.user);
        this.user = res;
        console.log(res);
      },
      error =>console.log(error)
    );
  }

}
