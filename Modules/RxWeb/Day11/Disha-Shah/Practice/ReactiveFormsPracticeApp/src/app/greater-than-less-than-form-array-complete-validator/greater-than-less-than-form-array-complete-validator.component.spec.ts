import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanLessThanFormArrayCompleteValidatorComponent } from './greater-than-less-than-form-array-complete-validator.component';

describe('GreaterThanLessThanFormArrayCompleteValidatorComponent', () => {
  let component: GreaterThanLessThanFormArrayCompleteValidatorComponent;
  let fixture: ComponentFixture<GreaterThanLessThanFormArrayCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanLessThanFormArrayCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanLessThanFormArrayCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
