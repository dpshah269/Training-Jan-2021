import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumberAddValidatorComponent } from './prime-number-add-validator.component';

describe('PrimeNumberAddValidatorComponent', () => {
  let component: PrimeNumberAddValidatorComponent;
  let fixture: ComponentFixture<PrimeNumberAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeNumberAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNumberAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
