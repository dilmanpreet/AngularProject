import { Component, OnInit } from '@angular/core';
import {ingredient} from "../recipeapp/ingredient.class";
import {recipe} from "../recipeapp/recipe.class";

@Component({
  selector: 'app-recipe-comp',
  templateUrl: './recipe-comp.component.html',
  styleUrls: ['./recipe-comp.component.css']
})
export class RecipeCompComponent implements OnInit {
  
  
  recipeName : string = "";
  newTime:number =0;
  
  // time : Array<string> = ["30 min","40 min","10 min"];

  recipe : Array<recipe> = [new recipe(" ", 0)
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
  // fastRecipe : Array<ingredient> = [new ingredient("milk", 5),
  // new ingredient("apple", 5),
  // new ingredient("juice", 3),
  // new ingredient("sugar", 12)];
   


  constructor() { }

  ngOnInit() {
 
  }
  addRecipe() {
    this.recipe.push(new recipe(this.formBinding2.name,this.formBinding2.time)); 

  }
  
  //  addIngredient(){

  //   this.ingredient.push(new ingredient(this.formBinding.name,this.formBinding.quantity)); 
  // }

  // selecting an item
  select(recipe){

    this.selectedItem = recipe;    
  }
    // editing a recipe
  editRecipe(){
  this.selectedItem.name=this.formBinding2.name;
 
  this.selectedItem.time=this.formBinding2.time;
   
  }
  // deleting a recipe
  deleteRecipe(recipe){
    
    this.selectedItem = recipe;    
  
    let index=recipe.indexOf(this.selectedItem);

    //  index=-1;
    // for(let i=0;i<=recipe.length;i++){
    //   if(recipe.name==this.selectedItem.name){
    //     index=i;
    //   }
      this.recipe.splice(index,1);
  
  }
  }
  

}


