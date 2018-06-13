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
bindedIngredient :ingredient = new ingredient("",0);

selectedIgredient : ingredient= new ingredient("",0); 
str:string ="";


ngOnInit() {

}
addRecipe() {
  this.service.recipeArray.push(new recipe(this.formBinding.name,this.formBinding.time)); 

}
// selecting an item
selectRecipe(sel: recipe){
  this.service.selectedRecipe = sel;
   // this.service.generateShoppigList();
  this.service.ourFridge.checkRecipe(sel);
  //this.formBinding2= sel;    use this to edit in realtime
}
  // editing a recipe
editRecipe(){
this.service.selectedRecipe.name=this.formBinding2.name;
this.service.selectedRecipe.time=this.formBinding2.time;
 
}
// deleting a recipe
deleteRecipe(){
  let index=this.service.recipeArray.indexOf(this.service.selectedRecipe);
  this.service.recipeArray.splice(index,1);
  
}
hideMenu(){
this.service.selectedRecipe = null;
}

 

}


