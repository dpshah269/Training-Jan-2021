import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanLessThanFormArrayAddValidatorComponent } from './greater-than-less-than-form-array-add-validator.component';

describe('GreaterThanLessThanFormArrayAddValidatorComponent', () => {
  let component: GreaterThanLessThanFormArrayAddValidatorComponent;
  let fixture: ComponentFixture<GreaterThanLessThanFormArrayAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanLessThanFormArrayAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanLessThanFormArrayAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
