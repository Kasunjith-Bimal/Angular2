import { Ingredient } from "../shared/ingredient";


export class Recipe {

    constructor(public name:string,public description:string,public imagepath:string,public ingredients:Ingredient[]){

    }
}
