import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/Forms';
import { AppComponent } from '../app.component';
import { RecipeCompComponent } from './recipe-comp.component';

describe('RecipeCompComponent', () => {
  let component: RecipeCompComponent;
  let fixture: ComponentFixture<RecipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCompComponent, AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
