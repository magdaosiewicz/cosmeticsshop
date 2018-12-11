import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";
import {Category} from "../categories/category";
import {CategoryService} from "../categories/category.service";


@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService, CategoryService]
})
@Injectable()
export class ProductsComponent implements OnInit {

  // productsOfCategory: Product[];
  products: Product[];
  product: Product;
  nameOfProduct: string;
  numberOfPieces: number;
  aboutProduct: string;
  category: string;
  ingredients: string;
  recommendation: string;
  price: number;
  productImage: string;
  categories: Category[];
  theCategory: Category;
  number: number;

  constructor(private productService: ProductService, private categoryService: CategoryService) {

    this.getCategories();
    this.theCategory=new Category();
    this.number=Math.floor((Math.random()*10)+1);
  }

  public getCategories = () => {
    this.categoryService.getCategories()
      .subscribe(result =>
        this.categories = result)
  };


  deleteProduct(id: any) {
    var products = this.products;
    this.productService.deleteProduct(id)
      .subscribe(data => {
        for (let i = 0; i < products.length; i++) {
          if (products[i]._id == id) {
            products.splice(i, 1);
          }
        }
      });
  }


  ngOnInit() {

    this.productService.getProducts()
      .subscribe(products =>
        this.products = products);

    // this.productService.getImage(this.productImage)
    //   .subscribe()


  }


}
