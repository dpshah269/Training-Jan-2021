import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAddValidatorComponent } from './password-add-validator.component';

describe('PasswordAddValidatorComponent', () => {
  let component: PasswordAddValidatorComponent;
  let fixture: ComponentFixture<PasswordAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
