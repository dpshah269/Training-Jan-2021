import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseAddValidatorComponent } from './uppercase-add-validator.component';

describe('UppercaseAddValidatorComponent', () => {
  let component: UppercaseAddValidatorComponent;
  let fixture: ComponentFixture<UppercaseAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppercaseAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercaseAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
