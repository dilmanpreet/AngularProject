import {ingredient} from "./ingredient.class";

export class receipe{
    id:number;
    name:string;
    ingredients : Array<ingredient> =[];
    instructions : Array<String> = [];
    time: number;
    
    addItem(name: string, quantity: number){
        
        this.ingredients.push(new ingredient(name, quantity));
    }

    addInstruction(inst: String){
       this.instructions.push(inst);
    }

     constructor(public nname:string, public ttime: number){  
       
       this.name=nname;
        this.time=ttime;      
     }
 
}