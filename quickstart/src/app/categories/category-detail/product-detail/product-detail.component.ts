import {Component, Injectable, OnInit} from '@angular/core';
import {CategoryService} from "../../category.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../../products/product";
import {Bag} from "../../../bag/bag";

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
@Injectable()
export class ProductDetailComponent implements OnInit {

  productId: number;
  product: Product;
  productsOfCategoryInput: Product[];
  bag: Bag;
  idd='5c0eca0c8ba45428e8257fa4';

  constructor(private categoryService: CategoryService, private  route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
      this.categoryService.getProductById(param.get('productId'))
        .subscribe(data => {
          console.log(data);
          this.product = data;

        });
    });

    this.route.paramMap.subscribe((param: Params) => {
      this.categoryService.getProductsOfCategory(param.get('nameOfCategory'))
        .subscribe(data => {
          console.log(data);
          this.productsOfCategoryInput = data;

        });
    });

    this.categoryService.getBagOfUser(this.idd)
      .subscribe(data =>{
        console.log(data);
        this.bag=data;
      })


  }

  public addProductToTheBag = (idd, bag) => {
    // idd='5c0eabcacc6fa5381466c5da';
    this.categoryService.addProductToTheBag(this.idd, this.product._id, this.bag)
      .subscribe(result =>
       this.bag = result)
  };








}

