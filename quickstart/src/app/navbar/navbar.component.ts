import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../users/user.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: '/navbar.component.html',
  styleUrls: ['/navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private myAwsomeService: UserService,private _authService: AuthService) {}

  ngOnInit(){
    console.log('logged is: ',this.myAwsomeService.getUserLoggedIn())
  }

}
