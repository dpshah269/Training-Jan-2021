import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionallabelConditionalComponent } from './conditionallabel-conditional.component';

describe('ConditionallabelConditionalComponent', () => {
  let component: ConditionallabelConditionalComponent;
  let fixture: ComponentFixture<ConditionallabelConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionallabelConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionallabelConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
