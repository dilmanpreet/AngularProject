//making and exporting the ingredient class
export class ingredient{
    
    constructor(public name : string, public quantity : number){
        
    }

  // adds and increses the quantity by one
    add(temp: number){
    this.quantity+= temp ;
    }
    //decreases the quantity by one
    subtract(temp: number){
    this.quantity-=temp;
    
    }

} 