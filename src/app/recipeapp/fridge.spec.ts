import { fridge } from "./fridge.class";
import {ingredient } from "./ingredient.class";
import {recipe } from "./recipe.class";

describe("Fridge Testing", function() {
    
beforeEach(function()
{

});

it("Spec file running Test", function(){
  let apple= new ingredient("apple", 3);

  apple.add(1);

  expect(true).toBe(true);
});

  it("Ingredient add test",function(){
    let apple= new ingredient("apple", 3);
     apple.add(1);
    expect(apple.quantity).toBe(4);
  });
  it("Ingredient subtract test",function(){
    let apple= new ingredient("apple", 3);
    apple.subtract(1);
    expect(apple.quantity).toBe(2);
  });
  it(" recipe add item test",function(){
    let apple= new ingredient("apple", 3);
    let applePieTest= new recipe("applePieTest",30);
    applePieTest.addIngredient(apple);
    expect(applePieTest.ingredientsList.length).toBe(1);
  });
  it(" recipe add instructions test",function(){
    let apple= new ingredient("apple", 3);
    let milk= new ingredient("milk", 1);
    let applePieTest= new recipe("applePieTest",30);
    applePieTest.addIngredient(apple);
    applePieTest.addIngredient(milk);
    applePieTest.addInstruction("mix the sugar in milk");
    expect(applePieTest.instructionsList.length).toBe(1);
    applePieTest.addInstruction("heat the milk");
    expect(applePieTest.instructionsList.length).toBe(2);
  });
  it("add test for fridge same item added twice",function(){
    let apple= new ingredient("apple", 3);
    let fridgeTest = new fridge();
    fridgeTest.addToFridge(apple);
    apple.add(1);
    expect(fridgeTest.ingredientsInFridge.length).toBe(1);     
    expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(4); //4 as we added 3 and 1 apple
  });

  it("add test for fridge different items added",function(){
    let apple= new ingredient("apple", 3);
    let mango= new ingredient("mango", 1);
    let fridgeTest = new fridge();
    fridgeTest.addToFridge(apple);
    fridgeTest.addToFridge(mango);
    expect(fridgeTest.ingredientsInFridge.length).toBe(2);   // apple at 0 and mango at 1  
    expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(3); //3 as we added 3 apple
    expect(fridgeTest.ingredientsInFridge[1].quantity).toBe(1); // 1 as we have 1 mango
  });
  it("remove test for fridge removing more than already have",function(){
    let apple= new ingredient("apple", 3);
    let mango= new ingredient("mango", 1);
    let fridgeTest = new fridge();
    fridgeTest.addToFridge(apple);
    fridgeTest.addToFridge(mango);
    expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.RemoveFromFridge(apple,4);
    expect(fridgeTest.ingredientsInFridge.length).toBe(1);//just mango left     
  });
  it("remove test for fridge removing the amount we have",function(){
    let apple= new ingredient("apple", 3);
    let mango= new ingredient("mango", 1);
    let fridgeTest = new fridge();
    fridgeTest.addToFridge(apple);
    fridgeTest.addToFridge(mango);
     expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.RemoveFromFridge(apple,3);
    expect(fridgeTest.ingredientsInFridge.length).toBe(2);//just mango left     
  });
  it("remove test for fridge just removing quantity",function(){
    let apple= new ingredient("apple", 3);
    let mango= new ingredient("mango", 1);
    let fridgeTest = new fridge();
    fridgeTest.addToFridge(apple);
    fridgeTest.addToFridge(mango);
    expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(3); //3 as we added 3 apple
    fridgeTest.RemoveFromFridge(apple,1);
    expect(fridgeTest.ingredientsInFridge.length).toBe(2);//mango and apple both there
    expect(fridgeTest.ingredientsInFridge[0].quantity).toBe(2); //2 as we removed 1 apple     
  });



});
