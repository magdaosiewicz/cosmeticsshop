import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router} from "@angular/router";
import {UserService} from "./users/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private user: UserService, private router: Router) {}
  private _registerUrl = "http://localhost:3000/users/create";
  private _loginUrl = "http://localhost:3000/users/login";
  private _updateUrl ="http://localhost:3000/users/update/";

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

   loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  // getToken(){
  //   return localStorage.getItem('token');
  // }

  // getUser(id,user){
  //   return this.http.get<any>("http://localhost:3000/users/getUser/"+id,user)
  // }

  updateUser(user,id){
    return this.http.put<any>(this._updateUrl + id, user)
  }

}
