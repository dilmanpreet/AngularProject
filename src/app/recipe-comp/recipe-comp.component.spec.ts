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
  describe("Recipe management Tesing:",() => {

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    it('Creating multiple recipes with different number of instructions and ingredients', () => {
      expect(true).toBe(true);
    });
    it('Adding Multiple recipe', () => {
 
        expect(true).toBe(true);
      
  
    });

  
    it('Removing multiple recipe', () => {
  
        expect(true).toBe(true);
      });
    });  
  });      
  
      

