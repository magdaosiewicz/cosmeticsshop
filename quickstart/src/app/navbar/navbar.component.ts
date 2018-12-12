import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../users/user.service";
import {AuthService} from "../auth.service";
import {Bag} from "../bag/bag";
import {CategoryService} from "../categories/category.service";

@Component({
  selector: 'app-navbar',
  templateUrl: '/navbar.component.html',
  styleUrls: ['/navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idd='5c0eabcacc6fa5381466c5da';
  bag: Bag;

  constructor(private myAwsomeService: UserService, private _authService: AuthService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    console.log('logged is: ', this.myAwsomeService.getUserLoggedIn())
  }


  // public getBag = () => {
  //   this.categoryService.getBagOfUser(this.idd)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.bag = data;
  //     })
  // };
}

