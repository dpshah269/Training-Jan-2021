import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetDefinedPropsOnlyValidatorComponent } from './reset-defined-props-only-validator.component';

describe('ResetDefinedPropsOnlyValidatorComponent', () => {
  let component: ResetDefinedPropsOnlyValidatorComponent;
  let fixture: ComponentFixture<ResetDefinedPropsOnlyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetDefinedPropsOnlyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetDefinedPropsOnlyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
