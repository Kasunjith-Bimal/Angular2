import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validator, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Recipe } from "app/recipes/recipe";
import { RecipeService } from "app/recipes/recipe.service";
import { Subscription } from "rxjs/Subscription";



@Component({
  selector: 'rb-recipeedit',
  templateUrl: './recipeedit.component.html',
  styles: [],
  providers: [RecipeService]
})
export class RecipeeditComponent implements OnInit {
  private recipeForm: FormGroup;

  private recipeIndexnumber: number;
  private subscription: Subscription;
  private recipe: Recipe;
  private isNew = true;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(

      (params: Params) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndexnumber = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndexnumber);
        } else {
          this.isNew = true;
          this.recipe = null;
        }

        this.initForm();
      }



    );
  }

  

  onSubmit() {

    const newRecipe = this.recipeForm.value;
    console.log(this.recipeForm.value);
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe);

    } else {
      //this.recipeService.editRecipe(this.recipe, newRecipe);

    }
    // this.navigateBack();

  }

  onCancel() {

    this.navigateBack();
  }
  private navigateBack() {
    this.router.navigate(['../']);
  }
  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.recipe.ingredients.length; i++) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          );
        }
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagepath;
      recipeContent = this.recipe.description;
    }
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      description: [recipeContent, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      ingredients: recipeIngredients
    });
  }

  OnRemoveItem(index:number){
   
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);

  }

 onAddItem(name :string, amount :string){
     (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
              name: new FormControl(name, Validators.required),
              amount: new FormControl(amount, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          )
  }

}

