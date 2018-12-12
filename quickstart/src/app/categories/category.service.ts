import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Product} from "../products/product";
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Bag} from "../bag/bag";
import {indexDebugNode} from "@angular/core/src/debug/debug_node";

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
  getBagOfUser(id: string): Observable<Bag>{
    return this.http.get<Bag>('http://localhost:3000/bags/'+ id +'/getBagOfUser')
  }
  addProductToTheBag(id: string, id_product: string, bag: Bag): Observable<Bag>{
    return this.http.put<Bag>('http://localhost:3000/bags/'+id+'/'+id_product+'/addProduct', bag)
  }
  removeProduct(id: string, id_product: string, index: number ,bag: Bag): Observable<Bag>{
    return this.http.put<Bag>('http://localhost:3000/bags/'+id+'/'+id_product+'/'+index+'/deleteProduct', bag)
  }









}
