import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {ProductsComponent} from "./products/products.component";
import {CategoryDetailComponent} from "./categories/category-detail/category-detail.component";
import {ProductDetailComponent} from "./categories/category-detail/product-detail/product-detail.component";
import {UsersComponent} from "./users/users.component";
import {SignUpComponent} from "./users/sign-up/sign-up.component";
import {AccountComponent} from "./account/account.component";
import {SignInComponent} from "./users/sign-in/sign-in.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {navbarRoute} from "./navbar/navbar.route";
const LAYOUT_ROUTES = [navbarRoute]

const routes: Routes = [
  ...LAYOUT_ROUTES,

  { path: 'home', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-detail/:nameOfCategory', component: CategoryDetailComponent},
  { path: 'category-detail/:nameOfCategory/:productId', component: ProductDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent
  },
  {
    path:"sign-in", component: SignInComponent
  },
  {
    path:"sign-up", component: SignUpComponent
  },
  {
    path: 'account', canActivate: [AuthGuard], component: AccountComponent
  },
  {
    path:"users/:name", component: UsersComponent
  },

//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
