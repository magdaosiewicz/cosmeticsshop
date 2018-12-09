import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {ProductsComponent} from "./products/products.component";
import {CategoryDetailComponent} from "./categories/category-detail/category-detail.component";
import {ProductDetailComponent} from "./categories/category-detail/product-detail/product-detail.component";

const routes: Routes = [
  { path: 'home', component: ProductsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category-detail/:nameOfCategory', component: CategoryDetailComponent},
    //children:
   { path: 'category-detail/:nameOfCategory/:productId', component: ProductDetailComponent },
   // ]},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
