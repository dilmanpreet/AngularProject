import { Injectable } from '@angular/core';
import { recipe } from '../recipe-comp/recipe.class';
import { ingredient } from '../ingredient.class';
import { fridge } from '../fridge-comp/fridge.class';



@Injectable({
  providedIn: 'root'
})
export class RmsService {
  
  public apple : ingredient = new ingredient("apple", 2);
	public mango : ingredient = new ingredient("mango",1);
	public milk : ingredient = new ingredient("Milk",3);
  public fries : ingredient = new ingredient("Fries",5);
  public Oil : ingredient = new ingredient("Oil",5);
  public sugar : ingredient = new ingredient("sugar",5);

  
  
  public mangoShake : recipe = new recipe("mango shake", 5);
  public FrenchFries : recipe = new recipe("French fries", 5);
  public milkShake : recipe = new recipe("Milk shake", 3);
  public pie : recipe = new recipe("Apple Pie",5);
  


	
	public ourFridge : fridge = new fridge();

  public recipeArray = new Array<recipe>();
  public selectedRecipe =null;

  public ingredientBuyList : Array<ingredient> = new Array<ingredient>();

  constructor() {
  
 
    this.recipeArray.push(this.mangoShake);

    this.recipeArray[0].addIngredient(this.mango);
    this.recipeArray[0].addIngredient(this.sugar);
    this.recipeArray[0].addIngredient(this.milk);
    
    this.recipeArray[0].addInstruction("Take milk");
    this.recipeArray[0].addInstruction("take sugar");
    this.recipeArray[0].addInstruction("mix them");

    this.recipeArray.push(this.FrenchFries);
    
    this.recipeArray[1].addIngredient(this.fries);
    this.recipeArray[1].addIngredient(this.Oil);
 
  
    this.recipeArray[1].addInstruction("Take fries");
    this.recipeArray[1].addInstruction("put in frier");
    this.recipeArray[1].addInstruction("Feed to hardil");

    
    this.recipeArray.push(this.pie);
    this.recipeArray.push(this.milkShake);
  
    this.ourFridge.addToFridge(this.apple);
		this.ourFridge.addToFridge(this.mango);
    this.ourFridge.addToFridge(this.sugar);
  }

  generateShoppigList(){
    this.ingredientBuyList = this.ourFridge.checkRecipe(this.selectedRecipe)[0];
    
    console.log("list is:" + this.ingredientBuyList.length);
  }
 
}
