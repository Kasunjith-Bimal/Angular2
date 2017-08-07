import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
@Injectable()
export class ShoppingListService {

  private items: Ingredient[] = [];
  editItem(oldItem: Ingredient, newItem: Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem
  }

  onDelete(item:Ingredient){
    this.items.splice(this.items.indexOf(item),1);
  }

  getIngredients() {

    return this.items;

  }

  addItems(items: Ingredient[]) {

    Array.prototype.push.apply(this.items, items);
  }

  addItem(items: Ingredient) {

    this.items.push(items);
  }
  constructor() { }

}
