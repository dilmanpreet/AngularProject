import {ingredient} from "./ingredient.class";

export class recipe{
    ingredients : Array<ingredient> =[];
    instructions : Array<String> = [];

    
    addItem(name: string, quantity: number){
        
        this.ingredients.push(new ingredient(name, quantity));
    }

    addInstruction(inst: String){
       this.instructions.push(inst);
    }

     constructor(public time: string){        
     }
 
}