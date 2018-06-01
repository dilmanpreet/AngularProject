import { Component, OnInit } from '@angular/core';
import {ingredient} from "../recipeapp/ingredient.class";
import {recipe} from "../recipeapp/recipe.class";

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class recipeCompComponent implements OnInit {
  
  
  newrecipeName : string = "";
  newRecipeTime:number =0;
  
  // time : Array<string> = ["30 min","40 min","10 min"];

  recipeArray : Array<recipe> = [new recipe(" ", 0)
  // new recipe("mango shake", 5),
  // new recipe("banana shake", 3),
  // new recipe("french fries", 12)
];

  // ingredient : Array<ingredient> = [new ingredient("milk", 5),
  // new ingredient("apple", 5),
  // new ingredient("juice", 3),
  // new ingredient("sugar", 12)];

  // formBinding: ingredient = new ingredient("",0);
  formBinding2: recipe = new recipe("",0);

  selectedItem : recipe = null;
  editName : recipe = null;
  deleteItem : recipe = null;
  // fastrecipe : Array<ingredient> = [new ingredient("milk", 5),
  // new ingredient("apple", 5),
  // new ingredient("juice", 3),
  // new ingredient("sugar", 12)];
   


  constructor() { }

  ngOnInit() {
 
  }
  //adding a Recipe
  addrecipe() {
    this.recipeArray.push(new recipe(this.formBinding2.name,this.formBinding2.time)); 

  }
  
   // selecting an item
  selectRecipe(selectedRecipe){
    this.selectedItem = selectedRecipe;    
  }
    // editing a recipe
  editrecipe(){
  this.selectedItem.name=this.formBinding2.name;
 
  this.selectedItem.time=this.formBinding2.time;
   
  }
  // deleting a recipe
  deleterecipe(){
    let index=-1;
    for(let i=0;i<=recipe.length;i++){
      if(recipe.name==this.selectedItem.name){
        index=i;
      }
      this.recipeArray.splice(index,1);
  
  }
   //  addIngredient(){

  //   this.ingredient.push(new ingredient(this.formBinding.name,this.formBinding.quantity)); 
  // }
  }
  

}


