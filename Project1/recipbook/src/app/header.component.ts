import { Component } from '@angular/core';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  providers:[RecipeService]
})
export class HeaderComponent  {


constructor(private recepiServise:RecipeService){}
  storeRecipe(){
 this.recepiServise.StoreData().subscribe(data=>console.log(data),error =>console.log(error));

  }


retriveRecipe(){
this.recepiServise.FeactchData();


}
}
