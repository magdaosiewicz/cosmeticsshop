import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements  CanActivate{

  constructor(private _authService: AuthService, private _router: Router){}

  //powoduje ze przenosi nas do strony logowania, gdyz dana strona jest aktywna tylko dla zalogowanch uzytkownikow
  canActivate(): boolean{
    if(this._authService.loggedIn()){
      console.log('true');
  return true;
    }else {
      console.log('false');
      this._router.navigate(['/sign-in']);
      return false;
    }
  }


}
