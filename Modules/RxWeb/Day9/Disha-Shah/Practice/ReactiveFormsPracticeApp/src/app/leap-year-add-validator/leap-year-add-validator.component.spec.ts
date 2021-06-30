import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapYearAddValidatorComponent } from './leap-year-add-validator.component';

describe('LeapYearAddValidatorComponent', () => {
  let component: LeapYearAddValidatorComponent;
  let fixture: ComponentFixture<LeapYearAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeapYearAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeapYearAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
