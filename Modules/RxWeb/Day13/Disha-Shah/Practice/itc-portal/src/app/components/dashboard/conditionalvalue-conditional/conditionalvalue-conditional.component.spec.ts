import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalvalueConditionalComponent } from './conditionalvalue-conditional.component';

describe('ConditionalvalueConditionalComponent', () => {
  let component: ConditionalvalueConditionalComponent;
  let fixture: ComponentFixture<ConditionalvalueConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalvalueConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalvalueConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
