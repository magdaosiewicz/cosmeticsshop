import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
//import { AppServiceComponent } from './app.service';

@Component({

//  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers: [AppServiceComponent]
})

export class AppComponent {
  title = 'SHOP ONLINE';

  // constructor(private _authService: AuthService){}
  //
  // user = {
  //   name: '',
  //   surname: ''
  // }
  //
  // userSubmit(){
  //   this.appServiceComponent.createNewUser(this.user)
  //     .subscribe(res => {console.log(res)});
  // }

}
