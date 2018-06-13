import { Component, OnInit } from '@angular/core';
import {ingredient} from "../ingredient.class";
import {recipe} from "./recipe.class";
import { RmsService } from '../rms/rms.service';

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  public service = new RmsService();

  constructor(service:RmsService) {   this.service = service; }

  
  
formBinding: recipe = new recipe("",0);
formBinding2: recipe = new recipe("",0);
selectedItem : recipe = null;
selectedIgredient : ingredient= new ingredient("",0); 


ngOnInit() {

}
addRecipe() {
  this.service.recipeArray.push(new recipe(this.formBinding.name,this.formBinding.time)); 

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
  let index=this.service.recipeArray.indexOf(this.selectedItem);
  this.service.recipeArray.splice(index,1);
  
}
hideMenu(){
this.selectedItem = null;
}

//  addIngredient(){

//   this.ingredient.push(new ingredient(this.formBinding.name,this.formBinding.quantity)); 
// }

}


