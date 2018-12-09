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
import { ProductDetailComponent } from './categories/category-detail/product-detail/product-detail.component';
import {HomeComponent} from "./home/home.component";
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {UserService} from "./users/user.service";
import {AccountComponent} from './account/account.component';
import {AuthGuard} from "./auth.guard";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ProductDetailComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    AccountComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [ProductService, CategoryService, UserService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
