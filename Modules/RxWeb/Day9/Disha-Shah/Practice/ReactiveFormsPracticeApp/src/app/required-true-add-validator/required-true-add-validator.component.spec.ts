import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredTrueAddValidatorComponent } from './required-true-add-validator.component';

describe('RequiredTrueAddValidatorComponent', () => {
  let component: RequiredTrueAddValidatorComponent;
  let fixture: ComponentFixture<RequiredTrueAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredTrueAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredTrueAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
