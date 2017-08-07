import { Component } from '@angular/core';
import {Recipe} from './recipe';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  providers:[RecipeService]
})
export class RecipesComponent {
SelectedRecipe : Recipe


}
