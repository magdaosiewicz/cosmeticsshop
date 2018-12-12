import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import {SignInComponent} from "./users/sign-in/sign-in.component";
import {SignUpComponent} from "./users/sign-up/sign-up.component";
import {navbarRoute} from "./navbar/navbar.route";
import {AccountComponent} from "./account/account.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuard} from "./auth.guard";
const LAYOUT_ROUTES = [navbarRoute]


export const appRoutes: Routes = [
  ...LAYOUT_ROUTES,
  {
    path: '',
    component: HomeComponent
  },
  {
    path:"sign-in",
    component: SignInComponent
  },
  {
    path:"sign-up",
    component: SignUpComponent
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    component: AccountComponent
  },

  {
    path:"users/:name",
    component: UsersComponent
  },

];
exports: [RouterModule]
