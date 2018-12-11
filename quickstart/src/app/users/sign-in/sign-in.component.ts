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
  // loginUserData= {};
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
        console.log(res);
        this.router.navigate(['/']);  //po zalogowaniu przeniesie mnie tu
        this.userService.setUserLoggedIn();
        this.loginUserData=res;
        console.log(this.loginUserData)
        }, err=>console.log("cos poszlo zle :)")
      )
  }


  // loginUser() {
  //
  //
  //   this._auth.loginUser(this.user).subscribe(data => {
  //     console.log(data);
  //     // if(data.success) {
  //       this._auth.storeUserData(data.token, data.user);
  //       console.log(this.user);
  //       // this.flashMessage.show(data.user.name + ' logged in Successfully', {cssClass: 'alert-success', timeout: 5000});
  //       this.router.navigate(['/account']);
  //     // } else {
  //     //   // this.flashMessage.show('Something went wrong, Please try again', {cssClass: 'alert-danger', timeout: 5000});
  //     //   this.router.navigate(['/sign-in']);
  //     // }
  //   })
  // }
}
