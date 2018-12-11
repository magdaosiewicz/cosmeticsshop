import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../products/product.service";
import {CategoryService} from "../category.service";
import {Product} from "../../products/product";
import {Category} from "../category";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  moduleId: module.id,
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService, ProductService]
})
@Injectable()

export class CategoryDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  productsOfCategoryInput: Product[];
  categories: Category[];

  constructor(private categoryService: CategoryService, private productService: ProductService, private  route: ActivatedRoute) {
    this.getCategories();
    this.productService.getProducts();
  }

  public getCategories = () => {
    this.categoryService.getCategories()
      .subscribe(result =>
        this.categories = result)
  };



  ngOnInit() {

    this.route.paramMap.subscribe((param: Params) => {
      this.categoryService.getProductsOfCategory(param.get('nameOfCategory'))
        .subscribe(data => {
          console.log(data);
          this.productsOfCategoryInput = data;

        });
    });
  }
  //   const nameOfCategory = this.route.snapshot.paramMap.get('nameOfCategory');

  ngOnDestroy()
  {
    //this.subscription.unsubscribe();
  }




}
