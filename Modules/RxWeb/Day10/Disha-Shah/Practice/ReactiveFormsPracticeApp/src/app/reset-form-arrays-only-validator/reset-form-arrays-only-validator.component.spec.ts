import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFormArraysOnlyValidatorComponent } from './reset-form-arrays-only-validator.component';

describe('ResetFormArraysOnlyValidatorComponent', () => {
  let component: ResetFormArraysOnlyValidatorComponent;
  let fixture: ComponentFixture<ResetFormArraysOnlyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetFormArraysOnlyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFormArraysOnlyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
