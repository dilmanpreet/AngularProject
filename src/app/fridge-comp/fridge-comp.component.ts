import { Component, OnInit } from '@angular/core';
import { RmsService } from '../rms/rms.service';
import {ingredient} from "../ingredient.class";
import {recipe} from "../recipe-comp/recipe.class";

@Component({
  selector: 'app-fridge-comp',
  templateUrl: './fridge-comp.component.html',
  styleUrls: ['./fridge-comp.component.css']
})
export class FridgeCompComponent implements OnInit {

  public service = new RmsService();

  constructor(service:RmsService) {   this.service = service; }

  public  selectedItem: ingredient = new ingredient("",0);
  public  changeItem : ingredient =  new ingredient("",0);;
  public  newItem : ingredient =  new ingredient("",0);;
  


ngOnInit() {

}
//adding Items to fridge
addItemToFridge() {
  this.service.ourFridge.addToFridge(new ingredient(this.newItem.name,this.newItem.quantity)); 

}
// selecting an ingredient
selectIngredient(sel: ingredient){
  this.selectedItem = sel;
   
}
  // editing a quantity
editQuantity(){
  this.service.ourFridge.addToFridge(this.changeItem);
 
}
// removing a Ingredient
removingIngredient(){
  
  this.service.ourFridge.RemoveFromFridge(this.selectedItem,this.selectedItem.quantity);

  
}
hideMenu(){
this.selectedItem = null;
}

 

}
