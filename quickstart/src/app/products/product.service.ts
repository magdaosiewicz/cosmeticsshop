import { Injectable } from '@angular/core';
import {Headers, Http, Jsonp, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Category} from "../categories/category";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  categories: Category[];

  constructor(private http: Http) {
  }

  public getCategory = () => {
    return this.categories;
  };

  getProducts() {
//    let userObject = JSON.stringify(newUserObject);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get('http://localhost:3000/products/products', options)
      .map(res => res.json());
  }

  getImage(filename: string) {
//    let userObject = JSON.stringify(newUserObject);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get('http://localhost:3000/images/image/'+filename , options)
      .map(res => res.json());
  }



  deleteProduct(id) {
//    let userObject = JSON.stringify(newUserObject);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.delete('http://localhost:3000/products/'+id+'/delete', options)
      .map(res => res.json());
  }



  getProductsByCategory(nameOfCategory) {
//    let userObject = JSON.stringify(newUserObject);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get('http://localhost:3000/products/'+nameOfCategory+'/getProductsByCategory', options)
      .map(res => res.json());
  }







}
