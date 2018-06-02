import { Component, OnInit } from '@angular/core';
import {ingredient} from "../ingredient.class";
import {receipe} from "../receipe.class";

@Component({
  selector: 'app-receipe-comp',
  templateUrl: './receipe-comp.component.html',
  styleUrls: ['./receipe-comp.component.css']
})
export class ReceipeCompComponent implements OnInit {
  
  
  receipeName : string = "";
  newTime:number =0;
  
  // time : Array<string> = ["30 min","40 min","10 min"];

  receipe : Array<receipe> = [new receipe(" ", 0)
  // new receipe("mango shake", 5),
  // new receipe("banana shake", 3),
  // new receipe("french fries", 12)
];

  // ingredient : Array<ingredient> = [new ingredient("milk", 5),
  // new ingredient("apple", 5),
  // new ingredient("juice", 3),
  // new ingredient("sugar", 12)];

  // formBinding: ingredient = new ingredient("",0);
  formBinding2: receipe = new receipe("",0);

  selectedItem : receipe = null;
  editName : receipe = null;
  deleteItem : receipe = null;
  // fastReceipe : Array<ingredient> = [new ingredient("milk", 5),
  // new ingredient("apple", 5),
  // new ingredient("juice", 3),
  // new ingredient("sugar", 12)];
   


  constructor() { }

  ngOnInit() {
 
  }
  addReceipe() {
    this.receipe.push(new receipe(this.formBinding2.name,this.formBinding2.time)); 

  }
  
  //  addIngredient(){

  //   this.ingredient.push(new ingredient(this.formBinding.name,this.formBinding.quantity)); 
  // }

  // selecting an item
  select(receipe){

    this.selectedItem = receipe;    
  }
    // editing a receipe
  editReceipe(){
  this.selectedItem.name=this.formBinding2.name;
 
  this.selectedItem.time=this.formBinding2.time;
   
  }
  // deleting a receipe
  deleteReceipe(){
    let index=-1;
    for(let i=0;i<=receipe.length;i++){
      if(receipe.name==this.selectedItem.name){
        index=i;
      }
      this.receipe.splice(index,1);
  
  }
  }
  

}


