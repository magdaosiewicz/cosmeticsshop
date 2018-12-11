import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user$: Observable <User>;

  constructor(private _auth: AuthService, private router: Router , private  userService: UserService) {
    if(!this.user$){
      this.user$={};
    }
  }

  ngOnInit() {

    this.user$=  this._auth.user$;

  }

  // registerUser() {
  //     this.user$=  this._auth.user$;
  // }

}
