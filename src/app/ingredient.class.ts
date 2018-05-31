//making and exporting the ingredient class
export class ingredient{
    


    /**
     * @param name Name Of Ingredient
     * @param quantity Quantity Of Ingredient
     */  
    constructor(public name : string, public quantity : number){
        
    }

  // adds and increses the quantity by the number
    add(temp: number){
    this.quantity+= temp ;
    }
    //decreases the quantity by the number
    subtract(temp: number){
    this.quantity-=temp;
    
    }

} 