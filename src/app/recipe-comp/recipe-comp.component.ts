import { Component, OnInit } from '@angular/core';
import {ingredient} from "../recipeapp/ingredient.class";
import {recipe} from "../recipeapp/recipe.class";

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  
  
  recipeArray : Array<recipe> = [new recipe(" ", 0),
  new recipe("mango shake", 5),
  new recipe("banana shake", 3),
  new recipe("french fries", 12)
];
formBinding: recipe = new recipe("",0);
formBinding2: recipe = new recipe("",0);
selectedItem : recipe = null;


constructor() { }

ngOnInit() {

}
addRecipe() {
  this.recipeArray.push(new recipe(this.formBinding.name,this.formBinding.time)); 

}
// selecting an item
selectRecipe(sel: recipe){
  this.selectedItem = sel;
  this.formBinding2= sel;    
}
  // editing a recipe
editRecipe(){
this.selectedItem.name=this.formBinding2.name;
this.selectedItem.time=this.formBinding2.time;
 
}
// deleting a recipe
deleteRecipe(){
  let index=this.recipeArray.indexOf(this.selectedItem);
  this.recipeArray.splice(index,1);
  
}
hideMenu(){
this.selectedItem = null;
}

//  addIngredient(){

//   this.ingredient.push(new ingredient(this.formBinding.name,this.formBinding.quantity)); 
// }

}


