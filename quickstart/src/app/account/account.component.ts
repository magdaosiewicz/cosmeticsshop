import {Component, OnInit} from '@angular/core';
import {UserService} from "../users/user.service";
import {AuthService} from "../auth.service";
import {User} from "../users/user";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private authService: AuthService) {
    if(!this.user){
      this.user={};
    }
  }

  ngOnInit() {
    this.userService.getUserById(this.user)  //bierze 1-go z listy
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
  };

  editUser(user) {
    this.authService.updateUser(user,user._id).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },error => {
        console.log(error);
      }
    );
  }
}
