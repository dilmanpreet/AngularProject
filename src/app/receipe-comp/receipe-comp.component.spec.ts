import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeCompComponent } from './receipe-comp.component';

describe('ReceipeCompComponent', () => {
  let component: ReceipeCompComponent;
  let fixture: ComponentFixture<ReceipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
