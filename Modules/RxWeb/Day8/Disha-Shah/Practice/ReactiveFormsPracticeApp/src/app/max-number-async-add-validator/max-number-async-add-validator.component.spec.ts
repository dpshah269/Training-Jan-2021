import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNumberAsyncAddValidatorComponent } from './max-number-async-add-validator.component';

describe('MaxNumberAsyncAddValidatorComponent', () => {
  let component: MaxNumberAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MaxNumberAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxNumberAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxNumberAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
