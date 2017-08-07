import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Recipe } from '../recipe';
import { Subscription } from "rxjs/Subscription";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipes-dwtails',
  templateUrl: './recipes-dwtails.component.html'

})
export class RecipesDwtailsComponent implements OnInit, OnDestroy {
  
  private recipeIndex: number;
  private suscription: Subscription;
  SelectedRecipe: Recipe

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  ngOnInit() {
    
    this.suscription = this.route.params.subscribe(
      (params: any) => {

        this.recipeIndex = params['id'];
        this.SelectedRecipe = this.recipeservise.getRecipe(this.recipeIndex);
      }

    );

    
  }

 


  constructor(private shoppingListService: ShoppingListService, private router: Router, private route: ActivatedRoute, private recipeservise: RecipeService) {

  }

  addShopingList() {

    this.shoppingListService.addItems(this.SelectedRecipe.ingredients);

  }

  onEdit() {
   this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipeservise.deleteRecipe(this.SelectedRecipe);
    this.router.navigate(['/recipes']);

  }
}
