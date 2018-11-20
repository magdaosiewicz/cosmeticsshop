import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) {
  }

  //retriving user

  getUsers() {
//    let userObject = JSON.stringify(newUserObject);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get('http://localhost:3000/users/getUsers', options)
      .map(res => res.json());
  }

}
