import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardAsyncAddValidatorComponent } from './credit-card-async-add-validator.component';

describe('CreditCardAsyncAddValidatorComponent', () => {
  let component: CreditCardAsyncAddValidatorComponent;
  let fixture: ComponentFixture<CreditCardAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
