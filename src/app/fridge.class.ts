import {ingredient } from "./ingredient.class";
import { recipe } from "./recipe.class";


export class fridge{
    
    
    ingre : Array<ingredient> =[];
    buyList : Array<ingredient> =[];
    haveList : Array<ingredient> =[];

 
   checkRecipe(recipe: recipe){
        for (let i=0;i<=recipe.ingredients.length;i++) {
            for (let j=0;i<=this.ingre.length;j++) {
                    if(this.ingre[j].name==recipe.ingredients[i].name){
                        if(this.ingre[j].quantity>=recipe.ingredients[i].quantity){
                            this.haveList.push(recipe.ingredients[i]);
                        }
                        else if(this.ingre[j].quantity<recipe.ingredients[i].quantity && this.ingre[j].quantity>0){
                                let diff : number =recipe.ingredients[i].quantity-this.ingre[j].quantity;
                                this.buyList.push(new ingredient(recipe.ingredients[i].name,diff));
                            }
                            else{
                                this.buyList.push(recipe.ingredients[i]);
                            }
                    }
            }    
        }

    }


    add(ing : string,amt:number){
    //add(tempIng:ingredient){
        let isItThere :boolean = false;
        let tempIng:ingredient=new ingredient(ing, amt);
        for (let i=0;i<this.ingre.length;i++) { 
            let temp:string = this.ingre[i].name;
            if(temp==tempIng.name){

              this.ingre[i].add(tempIng.quantity);
              isItThere=true;
            }        
            
        }
        if(isItThere==false){
            this.ingre.push(new ingredient(ing, amt));
        }

    }
    
    remove(ing:string, amt: number){
       // remove(tempIng:ingredient){     
        let isItZero:number = 1;
        let tempIng:ingredient=new ingredient(ing, amt);
        let position:number=-1;
        for (let i=0;i<this.ingre.length;i++) { 
            let temp:string = this.ingre[i].name;
            if(temp==tempIng.name){
              this.ingre[i].subtract(tempIng.quantity);
              isItZero=this.ingre[i].quantity;
              position=i;
            }        
            
        }
        if(isItZero<=0){
            this.ingre.splice(position,1);
        }
    //     if(isItZero<=0){
    //         ingre.splice(ing,1);
    //     }

    }
}
