import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeRoute } from "app/recipes/recipe.route";
import { provideRoutes, RouterModule, Routes } from '@angular/router';


const APP_ROUTE_PROVIDER: Routes = [

{path:'',redirectTo:'/recipes',pathMatch:'full'},
{path:'recipes',component:RecipesComponent,children:RecipeRoute},
{path:'shopping-list',component:ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);


