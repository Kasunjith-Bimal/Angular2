import { Component,Input } from '@angular/core';
import {Recipe} from '../recipe'
@Component({
  selector: 'rb-recipes-item',
  templateUrl: './recipes-item.component.html'
})
export class RecipesItemComponent  {
@Input() recipe:Recipe;
@Input() recipeId:number;

}
