import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredAddValidatorComponent } from './required-add-validator.component';

describe('RequiredAddValidatorComponent', () => {
  let component: RequiredAddValidatorComponent;
  let fixture: ComponentFixture<RequiredAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
