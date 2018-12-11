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

  constructor( private _auth: AuthService, private  router: Router, private userService: UserService) {
    if(!this.loginUserData){
      this.loginUserData={};
    }
  }
  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        (res) => {

          this.router.navigate(['/']);  //po zalogowaniu przeniesie mnie tu
          this.userService.setUserLoggedIn();
          this.loginUserData=res;
          console.log(res);
          console.log(this.loginUserData._id);
        }, err=>console.log("cos poszlo zle 🙂")
      )
  }


}
