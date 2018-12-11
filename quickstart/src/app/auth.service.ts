import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Router} from "@angular/router";
import {UserService} from "./users/user.service";
import {User} from "./users/user";
import {Observable} from "rxjs/Rx";
@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {}
  private _registerUrl = "http://localhost:3000/users/create";
  private _loginUrl = "http://localhost:3000/users/login";
  private _updateUrl ="http://localhost:3000/users/update/";

  registerUser(user:User): Observable<User>{
    return this.http.post<User>(this._registerUrl, user)
  }

  loginUser(user:User): Observable<User> {
    return this.http.post<any>(this._loginUrl, user);
  }

   loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  updateUser(user,id){
    return this.http.put<any>(this._updateUrl + id, user)
  }


}
