import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here
import { AppComponent } from './app.component';
import { recipeCompComponent } from './recipe-comp/recipe-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    recipeCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
