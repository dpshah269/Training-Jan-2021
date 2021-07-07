import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicrangeStepComponent } from './dynamicrange-step.component';

describe('DynamicrangeStepComponent', () => {
  let component: DynamicrangeStepComponent;
  let fixture: ComponentFixture<DynamicrangeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicrangeStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicrangeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
