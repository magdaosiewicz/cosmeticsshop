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

  constructor(private userService: UserService, private _auth: AuthService) {}
  ngOnInit() {
    this.userService.getUserByIdd('5bff03655d87fa51a025d808')  //trzeba zmienic, by bral id useraa nie na sztywno !!!!!!!!!!!!!!!!!!
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
  };

  editUser(user) {
    this._auth.updateUser(user,user._id).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },error => {
        console.log(error);
      }
    );
  }
}

