import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalhideConditionalComponent } from './conditionalhide-conditional.component';

describe('ConditionalhideConditionalComponent', () => {
  let component: ConditionalhideConditionalComponent;
  let fixture: ComponentFixture<ConditionalhideConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalhideConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalhideConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
