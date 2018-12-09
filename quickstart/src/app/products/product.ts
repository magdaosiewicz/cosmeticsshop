import {Category} from "../categories/category";

export class Product{

  _id?: string;
  nameOfProduct: string;
  numberOfPieces: number;
  aboutProduct: string;
  ingredients: string;
  recommendation: string;
  price: number;
  productImage: string;
  theCategories: Category[];
  // theCategory: Category;


  constructor(nameOfProduct: string, numberOfPieces: number, aboutProduct: string, ingredients: string, recommendation: string, price: number, category: string, theCategory: Category) {
    // this.nameOfProduct = nameOfProduct;
    // this.numberOfPieces = numberOfPieces;
    // this.aboutProduct = aboutProduct;
    // this.ingredients = ingredients;
    // this.recommendation = recommendation;
    // this.price = price;
    // this.category = category;
  }
}
