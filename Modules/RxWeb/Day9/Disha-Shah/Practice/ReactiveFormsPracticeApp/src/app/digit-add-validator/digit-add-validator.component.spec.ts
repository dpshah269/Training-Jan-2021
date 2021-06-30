import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitAddValidatorComponent } from './digit-add-validator.component';

describe('DigitAddValidatorComponent', () => {
  let component: DigitAddValidatorComponent;
  let fixture: ComponentFixture<DigitAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
