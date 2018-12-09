import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./products/product.service";
import {CategoryService} from "./categories/category.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './categories/category-detail/product-detail/product-detail.component';
// import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
