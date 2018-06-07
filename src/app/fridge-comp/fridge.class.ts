import {ingredient } from "../ingredient.class";
import { recipe } from "../recipe-comp/recipe.class";


export class fridge{
    
    
    ingredientsInFridge : Array<ingredient> =[];
    buyList : Array<ingredient> =[];
    haveList : Array<ingredient> =[];

     /** 
    * @function addToFridge Adds the Ingrdient to the fridge
    * @param notYetFridgeIngredient ingredient being added to the fridge
    */
   addToFridge(notYetFridgeIngredient:ingredient){     
        
        if(this.ingredientsInFridge.length==0){ // adding if the fridge is empty
            this.ingredientsInFridge.push(notYetFridgeIngredient);
        }
        else{    
            for (let tempIng of this.ingredientsInFridge) {            
                    if(tempIng.name==notYetFridgeIngredient.name){  //checking if there is element of same name
                    tempIng.add(notYetFridgeIngredient.quantity);//add to the quantity of the object in the fridge
                    return;
                    }      
                    
             }//end for loop
                this.ingredientsInFridge.push(notYetFridgeIngredient);
        }//end if-else loop
     } //end add to fridge function
   
    
     /**
    * @function RemoveFromFridge remove the Ingredient from the fridge
    * @param FridgeIngredient ingredient being removed frome the fridge
    */
     RemoveFromFridge(FridgeIngredient:ingredient,quantityBeingRemoved:number){
         
        if(this.ingredientsInFridge.length !== 0){  //if the fridge is empty
             let ingredientsPositonInFridge:number=this.ingredientsInFridge.indexOf(FridgeIngredient);
            for (let tempIng of this.ingredientsInFridge) {  // for removing a certain number of element from fridge
                
                if(FridgeIngredient.name==tempIng.name && tempIng.quantity>=quantityBeingRemoved && tempIng.quantity!=0 ){
                tempIng.subtract(quantityBeingRemoved);
                    return;            
                }        
                
            }
           this.ingredientsInFridge.splice(ingredientsPositonInFridge,1);
        } //end if for empty fridge
    }//end removeFromFridge function
    
     /**
    * @function checkRecipe check if a receipe can be made by checking the ingredients in fridge and gives a shopping list 
    * @param recipeToBeMade recipe being made and checked
    * @returns buyList with the items that need to be bought and haveList with the items we have in the list
    */

    checkRecipe(recipeToBeMade: recipe){
        for (let i=0;i<=recipeToBeMade.ingredientsList.length;i++) {
            for (let j=0;i<=this.ingredientsInFridge.length;j++) {
                    if(this.ingredientsInFridge[j].name==recipeToBeMade.ingredientsList[i].name){
                        if(this.ingredientsInFridge[j].quantity>=recipeToBeMade.ingredientsList[i].quantity){
                            this.haveList.push(recipeToBeMade.ingredientsList[i]);
                        }
                        else if(this.ingredientsInFridge[j].quantity<recipeToBeMade.ingredientsList[i].quantity && this.ingredientsInFridge[j].quantity>0){
                                let diff : number =recipeToBeMade.ingredientsList[i].quantity-this.ingredientsInFridge[j].quantity;
                                this.buyList.push(new ingredient(recipeToBeMade.ingredientsList[i].name,diff));
                            }
                            else{
                                this.buyList.push(recipeToBeMade.ingredientsList[i]);
                            }
                    }
            }    
        }
        return [this.buyList,this.haveList];
    }
}

