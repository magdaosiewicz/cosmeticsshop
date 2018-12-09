import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthService} from "../../auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerUserData ={};
  error: string;
  errorEmailExists: string;
  success: boolean;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.success = false;
  }

  registerUser(){
    this.error = null;
    this.errorEmailExists = null;
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {this.success = true;
      console.log(res);
      localStorage.setItem('token',res.token)},
      error => this.processError(error)
    );
  }

  private processError(response: HttpErrorResponse) {
    this.success = null;
    if (response.status === 400  ) {
      this.errorEmailExists = 'ERROR';
    }else {
      this.error = 'ERROR';
    }
  }
}

