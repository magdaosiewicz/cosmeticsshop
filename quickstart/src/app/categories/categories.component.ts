import {Component, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "./category.service";
import {ProductService} from "../products/product.service";
import {Product} from "../products/product";
import {Subject} from "rxjs/Subject";
import {ActivatedRoute, Params} from "@angular/router";
import {CategoryDetailComponent} from "./category-detail/category-detail.component";


@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService, ProductService]
})

@Injectable()
export class CategoriesComponent implements OnInit {
  categories: Category[];
  category: Category;
  productsOfs: Product[];       // tu si eaktualizyja produktyu

  constructor(private categoryService: CategoryService, private productService: ProductService, private  route: ActivatedRoute) {}


  @ViewChild('childRef')
  categoryDetailComponent: CategoryDetailComponent;



  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories =>
        this.categories = categories);

  }

}
