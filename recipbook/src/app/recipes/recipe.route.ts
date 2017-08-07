import { RecipeStartComponent } from "app/recipes/recipe-start.component";
import { RecipesDwtailsComponent } from "app/recipes/recipes-dwtails/recipes-dwtails.component";
import { RecipeeditComponent } from "app/recipes/recipeedit/recipeedit.component";
import {Routes} from '@angular/router';
export const RecipeRoute: Routes = [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeeditComponent },
  { path: ':id', component: RecipesDwtailsComponent },
  { path: ':id/edit', component: RecipeeditComponent }
];

