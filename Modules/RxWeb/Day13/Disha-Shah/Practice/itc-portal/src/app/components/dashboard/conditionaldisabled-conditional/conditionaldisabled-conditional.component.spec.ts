import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionaldisabledConditionalComponent } from './conditionaldisabled-conditional.component';

describe('ConditionaldisabledConditionalComponent', () => {
  let component: ConditionaldisabledConditionalComponent;
  let fixture: ComponentFixture<ConditionaldisabledConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionaldisabledConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionaldisabledConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
