import { Component, OnInit } from '@angular/core';
import  {UserService } from "./user.service";
import  {User} from "./user";
import * as $ from 'jquery'
import {any} from "codelyzer/util/function";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
// name='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params);
    // this.name = this.route.snapshot.params.name;
    // if(!this.name) this.name='not passed?';
  }
}
