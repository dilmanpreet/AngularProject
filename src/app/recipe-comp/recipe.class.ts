import {ingredient} from "../ingredient.class";

export class recipe{
    ingredientsList : Array<ingredient> =[];
    instructionsList : Array<String> = [];
    recipeTime:number;
    recipeName: string;
      /**
         /** 
    * @function addIngredient Adds the Ingrdient to the recipe
    * @param notYetrecipeIngredient ingredient being added to the recipe
    */
   addIngredient(notYetrecipeIngredient:ingredient){     
        
    if(this.ingredientsList.length==0){ // adding if the recipe is empty
        this.ingredientsList.push(notYetrecipeIngredient);
    }
    else{    
        for (let tempIng of this.ingredientsList) {            
                if(tempIng.name==notYetrecipeIngredient.name){  //checking if there is element of same name
                tempIng.add(notYetrecipeIngredient.quantity);//add to the quantity of the object in the recipe
                return;
                }      
                
         }//end for loop
            this.ingredientsList.push(notYetrecipeIngredient);
    }//end if-else loop
 } //end add to recipe function



      /**
     * @function addInstruction Add Instruction for the Recipe
     * @param instruction Instruction  Being Added
     */
    addInstruction(inst: String){
       this.instructionsList.push(inst);
    }
   
     constructor(public name:string,public time: number){ 
        this.recipeName=name;
        this.recipeTime=time;    
     }
 
}