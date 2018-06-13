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
  
  
  public rec1 : recipe = new recipe("mango shake", 5);
  public rec2 : recipe = new recipe("Banana shake", 5);
  public rec3 : recipe = new recipe("Milk shake", 3);
  public rec4 : recipe = new recipe("French fries",5);
  


	
	public ourFridge : fridge = new fridge();

  public recipeArray = new Array<recipe>();
  public selectedRecipe = new recipe("",0);

  public ingredientBuyList : Array<ingredient> = new Array<ingredient>();

  constructor() {
    this.recipeArray.push(this.rec1);
    this.recipeArray.push(this.rec2);
    this.recipeArray.push(this.rec3);
    this.recipeArray.push(this.rec4);

    this.recipeArray[0].addIngredient(this.ing2);
    this.recipeArray[0].addIngredient(this.ing3);
    this.recipeArray[0].addIngredient(this.ing4);
    
    this.recipeArray[0].addInstruction("Take milk");
    this.recipeArray[0].addInstruction("take sugar");
    this.recipeArray[0].addInstruction("mix them");
  
    this.recipeArray[3].addInstruction("Take fries");
    this.recipeArray[3].addInstruction("put in frier");
    this.recipeArray[3].addInstruction("Feed to hardil");
  
    this.ourFridge.addToFridge(this.ing1);
		this.ourFridge.addToFridge(this.ing2);
    this.ourFridge.addToFridge(this.ing4);
  }

  generateShoppigList(){
    this.ingredientBuyList = this.ourFridge.checkRecipe(this.selectedRecipe)[0];
    console.log("list is:" + this.ingredientBuyList.length);
  }
 
}
