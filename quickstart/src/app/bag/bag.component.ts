import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../categories/category.service";
import {Bag} from "./bag";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  bag: Bag;
  idd='5c0eca0c8ba45428e8257fa4';


  constructor(private categoryService: CategoryService) {
    this.categoryService.getBagOfUser(this.idd);
    if(! this.bag){
      this.bag=null;
    }
  }

  ngOnInit() {

    this.categoryService.getBagOfUser(this.idd)
      .subscribe(data =>{
        console.log(data);
        this.bag=data;
      })


  }

}
