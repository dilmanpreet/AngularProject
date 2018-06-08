import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here
import { AppComponent } from './app.component';
import { RecipeCompComponent } from './recipe-comp/recipe-comp.component';
import { FridgeCompComponent } from './fridge-comp/fridge-comp.component';
import { ShoppinglistCompComponent } from './shoppinglist-comp/shoppinglist-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCompComponent,
    FridgeCompComponent,
    ShoppinglistCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
