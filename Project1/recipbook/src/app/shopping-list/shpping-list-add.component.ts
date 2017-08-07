import { Component, Input, OnChanges, Output ,EventEmitter} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Ingredient } from "app/shared/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";


@Component({
  selector: 'rb-shpping-list-add',
  templateUrl: './shpping-list-add.component.html',

})
export class ShppingListAddComponent implements OnChanges {

  @Input() item: Ingredient;
  @Output() clead = new EventEmitter();
  isAdd = true;
  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = { name: null, amount: null };

    } else {
      this.isAdd = false;
    }
  }
  onDelete() {
    this.shppingListService.onDelete(this.item);
    this.onClear();
  }


  constructor(private shppingListService: ShoppingListService) {

  }

  OnSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {

      this.shppingListService.editItem(this.item, newIngredient)
      this.onClear();

    } else {
      console.log(ingredient);
      this.item = newIngredient;
      this.shppingListService.addItem(this.item);

    }

  }

    onClear() {
    this.isAdd = true;
    this.clead.emit(null);
  }
}
