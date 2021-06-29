import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOfAsyncAddValidatorComponent } from './all-of-async-add-validator.component';

describe('AllOfAsyncAddValidatorComponent', () => {
  let component: AllOfAsyncAddValidatorComponent;
  let fixture: ComponentFixture<AllOfAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOfAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOfAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
