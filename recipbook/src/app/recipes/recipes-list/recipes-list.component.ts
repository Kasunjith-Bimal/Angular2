import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
  providers: [RecipeService]
})
export class RecipesListComponent implements OnInit {
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes)
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {


  }


  //recipe =new Recipe('kasunjith','Kasunysoft','http://thumbs.ebaystatic.com/images/m/mL6ILbLo63F70aCmpJpXSJg/s-l225.jpg');
  @Output('recepeSelected') recepeSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {

    this.recepeSelected.emit(recipe);

  }
}
