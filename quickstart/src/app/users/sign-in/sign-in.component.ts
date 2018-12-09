import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginUserData={};
  constructor( private _auth: AuthService, private  router: Router, private user: UserService) { }
  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);  //po zalogowaniu przeniesie mnie tu
        this.user.setUserLoggedIn();
        }, err=>console.log(err)
      )
  }
}
