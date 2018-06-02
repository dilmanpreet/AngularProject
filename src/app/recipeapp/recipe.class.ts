import {ingredient} from "./ingredient.class";

export class recipe{
    ingredientsList : Array<ingredient> =[];
    instructionsList : Array<String> = [];
    recipeTime:number;
    nname: string;
      /**
     * @function addItem Adds the Item to the IngredientList
     * @param Ingredient It is the Ingredient being added to the Recipe 
     */
    addIngredient(nowingredient:ingredient){
        if(this.ingredientsList.length==0){
            this.ingredientsList.push(nowingredient);
        }
        else{
            for(let count of this.ingredientsList){
                if(count.name==nowingredient.name){
                    count.quantity+=nowingredient.quantity;
                    return;
                }
                this.ingredientsList.push(nowingredient);
            }
        }
     }

      /**
     * @function addInstruction Add Instruction for the Recipe
     * @param instruction Instruction  Being Added
     */
    addInstruction(inst: String){
       this.instructionsList.push(inst);
    }
   
     constructor(public name:string,public time: number){ 
        this.nname=name;
        this.recipeTime=time;    
     }
 
}