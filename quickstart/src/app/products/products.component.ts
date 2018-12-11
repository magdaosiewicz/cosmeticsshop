import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";
import {Category} from "../categories/category";
import {CategoryService} from "../categories/category.service";

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  products: Product[];
  product: Product;
  // nameOfProduct: string;
  // numberOfPieces: number;
  // aboutProduct: string;
  // ingredients: string;
  // recommendation: string;
  // price: number;
  @Input() category: Category;

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  // getProductsByCategory(){
  //   this.productService.getProductsByCategory()
  //     .subscribe(products =>
  //       this.products = products);
  // }

  deleteProduct(id: any){
    var products = this.products;
    this.productService.deleteProduct(id)
      .subscribe(data =>{
    //    if(data.n == 1){
          for(let i=0; i<products.length; i++){
            if(products[i]._id == id){
              products.splice(i, 1);
            }
          }
     //   }
      });
  }



  ngOnInit() {

    this.productService.getProducts()
      .subscribe(products =>
        this.products = products);


    // this.productService.getProductsByCategory()
    //   .subscribe(products =>
    //     this.products = products);

  }


}
