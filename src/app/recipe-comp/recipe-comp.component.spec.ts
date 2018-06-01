import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipeCompComponent } from './recipe-comp.component';

describe('recipeCompComponent', () => {
  let component: recipeCompComponent;
  let fixture: ComponentFixture<recipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
