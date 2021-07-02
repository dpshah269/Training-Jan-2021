import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDigitValidatorComponent } from './not-digit-validator.component';

describe('NotDigitValidatorComponent', () => {
  let component: NotDigitValidatorComponent;
  let fixture: ComponentFixture<NotDigitValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDigitValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDigitValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
