import { fridge } from "./fridge.class";
import {ingredient } from "./ingredient.class";
import {recipe } from "./recipe.class";

describe("A suite", function() {
    
beforeEach(function()
{

});

it("Test", function(){
  let appleTest= new ingredient("apple", 3);

  appleTest.add(1);

  expect(true).toBe(true);
});

  it("add test",function(){
    let appleTest= new ingredient("apple", 3);
     appleTest.add(1);
    expect(appleTest.quantity).toBe(4);
  });
  it("subtract test",function(){
    let appleTest= new ingredient("apple", 3);
    appleTest.subtract(1);
    expect(appleTest.quantity).toBe(2);
  });
  it(" receipe add item test",function(){
    let appleTest= new ingredient("apple", 3);
    let applePieTest= new recipe("30 min");
    applePieTest.addItem("apple",1);
    expect(applePieTest.ingredients.length).toBe(1);
  });
  it(" receipe add instructions test",function(){
    let appleTest= new ingredient("sugar", 3);
    let applePieTest= new recipe("30 min");
    applePieTest.addItem("milk",1);
    applePieTest.addItem("sugar",1);
    applePieTest.addInstruction("mix the sugar in milk");
    expect(applePieTest.instructions.length).toBe(1);
    applePieTest.addInstruction("heat the milk");
    expect(applePieTest.instructions.length).toBe(2);
  });
  it("add test for fridge same item added twice",function(){
    let appleTest= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.add("apple",3);
    fridgeTest.add("apple",1);
    expect(fridgeTest.ingre.length).toBe(1);     
    expect(fridgeTest.ingre[0].quantity).toBe(4); //4 as we added 3 and 1 apple
  });

  it("add test for fridge different items added",function(){
    let appleTest= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.add("apple",3);
    fridgeTest.add("mango",1);
    expect(fridgeTest.ingre.length).toBe(2);     
    expect(fridgeTest.ingre[0].quantity).toBe(3); //3 as we added 3 apple
    expect(fridgeTest.ingre[1].quantity).toBe(1); // 1 as we have 1 mango
  });
  it("remove test for fridge removing more than already have",function(){
    let appleTest= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.add("apple",3);
    fridgeTest.add("mango",1);
    expect(fridgeTest.ingre[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.remove("apple",4);
    expect(fridgeTest.ingre.length).toBe(1);//just mango left     
  });
  it("remove test for fridge removing the amount we have",function(){
    let appleTest= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.add("apple",3);
    fridgeTest.add("mango",1);
    expect(fridgeTest.ingre[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.remove("apple",3);
    expect(fridgeTest.ingre.length).toBe(1);//just mango left     
  });
  it("remove test for fridge just removing quantity",function(){
    let appleTest= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.add("apple",3);
    fridgeTest.add("mango",1);
    expect(fridgeTest.ingre[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.remove("apple",1);
    expect(fridgeTest.ingre.length).toBe(2);//mango and apple both there
    expect(fridgeTest.ingre[0].quantity).toBe(2); //2 as we removed 1 apple     
  });



});
