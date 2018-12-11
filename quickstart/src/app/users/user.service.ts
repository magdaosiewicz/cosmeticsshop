import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  constructor(private http: HttpClient) {this.isUserLoggedIn =false;}
  private _registerUrl = "http://localhost:3000/users/create";

  // registerUser(user:User){
  //   return this.http.post<User>(this._registerUrl, user)
  // }
  //retriving user
  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  getUserById(id: User): Observable<User>{
    return this.http.get<User>('http://localhost:3000/users/getUser/'+id)
  }

  getID(){
    return localStorage.getItem('id');
  }

}
