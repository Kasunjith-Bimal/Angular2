import { Injectable, EventEmitter } from '@angular/core';
import "rxjs/Rx";
import { Http, Headers, Response } from "@angular/http";
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/shared/ingredient";



@Injectable()
export class RecipeService {
recipeChanged =new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }


  recipes: Recipe[] = [
    new Recipe('kasunjith', 'Kasunysoft', 'http://thumbs.ebaystatic.com/images/m/mL6ILbLo63F70aCmpJpXSJg/s-l225.jpg', [
      new Ingredient("aaaaa", 2),
      new Ingredient("bbbbb", 3)
    ]),
    new Recipe('kasunjith2', 'Kasunysoft2', 'http://thumbs.ebaystatic.com/images/m/mL6ILbLo63F70aCmpJpXSJg/s-l225.jpg', [
      new Ingredient("aaaaa", 1),
      new Ingredient("bbbbb", 3)

    ])
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }



  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    console.log(oldRecipe);
    console.log(newRecipe);
  }


  StoreData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put("https://recipebook-30a1f.firebaseio.com/recipes.json", body, { headers: headers });
  }

  FeactchData() {

   return this.http.get("https://recipebook-30a1f.firebaseio.com/recipes.json").map((response: Response) => response.json()).subscribe((data:Recipe[])=>{

      this.recipes =data;
      this.recipeChanged.emit(this.recipes);
    });

 
  }
}
