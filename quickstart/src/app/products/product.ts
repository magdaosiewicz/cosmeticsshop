import {Category} from "../categories/category";

export class Product{

  _id?: string;
  nameOfProduct: string;
  numberOfPieces: number;
  aboutProduct: string;
  ingredients: string;
  recommendation: string;
  price: number;
  category: Category;


}
