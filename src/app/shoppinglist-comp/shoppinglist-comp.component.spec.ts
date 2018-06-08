import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistCompComponent } from './shoppinglist-comp.component';

describe('ShoppinglistCompComponent', () => {
  let component: ShoppinglistCompComponent;
  let fixture: ComponentFixture<ShoppinglistCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinglistCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
