import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Product} from "../products/product";
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  nameOfCategory: string;

  constructor(private _http: Http, private http: HttpClient) {

    this.getProductsOfCategory(this.nameOfCategory)

  }

  getCategories() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });
    return this._http.get('http://localhost:3000/categories/getCategories', options)
      .map(res => res.json());
  }


  getCategoryById(id) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', ///Access-Control-Allow-Origin – informuje, że z podanej domeny można wykonać żądanie XHR,
      'Access-Control-Allow-Credentials': 'true'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this._http.get('http://localhost:3000/categories/' + id + '/getCategoryById', options)
      .map(res => res.json());
  }

  getProductsOfCategory(nameOfCategory: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:3000/products/' + nameOfCategory + '/getProductsByCategory')

  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products/'+id+'/product')
  }







}
