import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericAsyncAddValidatorComponent } from './numeric-async-add-validator.component';

describe('NumericAsyncAddValidatorComponent', () => {
  let component: NumericAsyncAddValidatorComponent;
  let fixture: ComponentFixture<NumericAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
