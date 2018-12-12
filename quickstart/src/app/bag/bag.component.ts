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
  idd='5c0fa8229c2cb522dca880da';


  constructor(private categoryService: CategoryService) {
    this.categoryService.getBagOfUser(this.idd);
    // if(! this.bag){
    //   this.bag={};
    // }
  }

  ngOnInit() {

    this.categoryService.getBagOfUser(this.idd)
      .subscribe(data =>{
        console.log(data);
        this.bag=data;
      })
  }

  deleteProduct= (id_product) => {
    this.categoryService.removeProduct(this.idd, id_product, this.bag);
    this.categoryService.getBagOfUser(this.idd)
      .subscribe(data =>{
        console.log(data);
        this.bag=data;
      });
  }





}
