import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {User} from "../user";
import {NgForm} from "@angular/forms";
import {tokenKey} from "@angular/core/src/view";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginUserData: User;

  constructor( private authService: AuthService, private  router: Router, private userService: UserService) {
    if(!this.loginUserData){
      this.loginUserData={};
    }
  }

  ngOnInit() {}

  loginUser() {
    this.authService.loginUser(this.loginUserData)
      .subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
          console.log(this.loginUserData);
          this.loginUserData=res;
          console.log(res);
          this.router.navigate(['/']);
          this.userService.setUserLoggedIn();
        }, err=>console.log("Uuupps! Coś poszło źle 🙂")
      )
  }


}
