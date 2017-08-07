import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {

  ngOnInit(){
    this.items =this.shoppingListService.getIngredients();
  }

items:Ingredient[]=[];
selectedListitem :Ingredient =null;

constructor(private shoppingListService:ShoppingListService){


}
onSelectItem(ingredient:Ingredient){
this.selectedListitem =ingredient;

}
Onclead(){
  this.selectedListitem =null;
}

}
