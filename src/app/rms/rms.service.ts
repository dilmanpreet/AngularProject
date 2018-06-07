import { Injectable } from '@angular/core';
import { recipe } from '../recipe-comp/recipe.class';
import { ingredient } from '../ingredient.class';
import { fridge } from '../fridge-comp/fridge.class';



@Injectable({
  providedIn: 'root'
})
export class RmsService {
  
  public ing1 : ingredient = new ingredient("apple", 2);
	public ing2 : ingredient = new ingredient("orange",1);
	public ing3 : ingredient = new ingredient("Milk",3);
	public ing4 : ingredient = new ingredient("sugar",5);
	
	public ourFridge : fridge = new fridge();

  public recipeArray = new Array<recipe>();
  public selectedRecipe = new recipe("",0);

  public ingredientBuyList : Array<ingredient> = new Array<ingredient>();

  constructor() {
    this.recipeArray.push(new recipe("recipe1",15));
    this.recipeArray[0].addIngredient(this.ing1);
    this.recipeArray[0].addIngredient(this.ing2);
    this.recipeArray[0].addIngredient(this.ing3);
    this.recipeArray[0].addIngredient(this.ing4);
  
    this.ourFridge.addToFridge(this.ing1);
		this.ourFridge.addToFridge(this.ing2);
    this.ourFridge.addToFridge(this.ing4);
  }

  generateShoppigList(){
    this.ingredientBuyList = this.ourFridge.checkRecipe(this.selectedRecipe)[0];
    console.log("list is:" + this.ingredientBuyList.length);
  }
 
}
