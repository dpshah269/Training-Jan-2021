import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionaldescriptionConditionalComponent } from './conditionaldescription-conditional.component';

describe('ConditionaldescriptionConditionalComponent', () => {
  let component: ConditionaldescriptionConditionalComponent;
  let fixture: ComponentFixture<ConditionaldescriptionConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionaldescriptionConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionaldescriptionConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
