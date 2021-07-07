import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalclassConditionalComponent } from './conditionalclass-conditional.component';

describe('ConditionalclassConditionalComponent', () => {
  let component: ConditionalclassConditionalComponent;
  let fixture: ComponentFixture<ConditionalclassConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalclassConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalclassConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
