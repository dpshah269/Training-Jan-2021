import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalControlDisableCompleteValidatorComponent } from './conditional-control-disable-complete-validator.component';

describe('ConditionalControlDisableCompleteValidatorComponent', () => {
  let component: ConditionalControlDisableCompleteValidatorComponent;
  let fixture: ComponentFixture<ConditionalControlDisableCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalControlDisableCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalControlDisableCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
