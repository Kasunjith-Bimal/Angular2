import { NgModule } from '@angular/core';
import { routing } from "app/app.route";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './dropdown.directive';


import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item.component';
import { RecipesDwtailsComponent } from './recipes/recipes-dwtails/recipes-dwtails.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShppingListAddComponent } from './shopping-list/shpping-list-add.component';

import { ShoppingListService } from "app/shopping-list/shopping-list.service";

import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeeditComponent } from './recipes/recipeedit/recipeedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDwtailsComponent,
    ShoppingListComponent,
    ShppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeeditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ReactiveFormsModule,
  
     
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
