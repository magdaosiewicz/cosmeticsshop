import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import {HomeComponent} from "./home/home.component";
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import {ExtraOptions, RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {appRoutes} from "./app.routes";
import {navbarRoute} from "./navbar/navbar.route";
import {UserService} from "./users/user.service";
import {AccountComponent} from './account/account.component';
import {AuthGuard} from "./auth.guard";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    AccountComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UserService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
