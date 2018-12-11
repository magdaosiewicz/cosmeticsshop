import {Component, OnInit} from '@angular/core';
import {UserService} from "../users/user.service";
import {AuthService} from "../auth.service";
import {User} from "../users/user";
import {ActivatedRoute} from "@angular/router";
import {tokenKey} from "@angular/core/src/view";
import {currentId} from "async_hooks";
import {getCurrentView} from "@angular/core/src/render3";
import {cursorTo} from "readline";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user:User;
  constructor(private userService: UserService, private _auth: AuthService, private route: ActivatedRoute) {
    if(!this.user){
      this.user={};
    }
  }

  ngOnInit() {
     this.userService.getUserById(this.user)
  .subscribe(dane => {
        console.log(dane);
        this.user = dane;
      });
  };

  editUser(user,id) {
    // this._auth.updateUser(user,id).subscribe(
    //   data => {
    //     this.user = data;
    //     console.log(data);
    //   },error => {
    //     console.log(error);
    //   }
    // );
  }
}

