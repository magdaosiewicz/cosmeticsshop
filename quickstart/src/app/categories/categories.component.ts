import {Component, OnInit} from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "./category.service";


@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  category: Category;
  nameOfCategory: string;


  constructor(private categoryService: CategoryService) {
  }



  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories =>
        this.categories = categories);
  }



}
