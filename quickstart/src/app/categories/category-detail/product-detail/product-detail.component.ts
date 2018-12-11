import {Component, Injectable, OnInit} from '@angular/core';
import {CategoryService} from "../../category.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../../products/product";

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



  }

}

