// import {Injectable} from "@angular/core";
// import {Headers, Http, RequestOptions, Response} from "@angular/http";
// import {Observable} from "rxjs/Rx";
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//
//
// @Injectable()
// export class AppServiceComponent {
//
//   constructor(private _http: Http) {
//   }
//
//   createNewUser(newUserObject: Object) {
//
//     let userObject = JSON.stringify(newUserObject);
//     let headers = new Headers({
//       'Content-Type': 'application/json'
//
//     });
//
//     let options = new RequestOptions({
//       headers: headers
//     });
//
//     return this._http.post('users/create', userObject, options)
//       .map((res: Response) => res.json());
//     //  .catch((error: any) => Observable.throw(error.json().error));
//
//
//   }
// }
