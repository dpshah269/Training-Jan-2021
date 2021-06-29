import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaNumericAsyncAddValidatorComponent } from './alpha-numeric-async-add-validator.component';

describe('AlphaNumericAsyncAddValidatorComponent', () => {
  let component: AlphaNumericAsyncAddValidatorComponent;
  let fixture: ComponentFixture<AlphaNumericAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaNumericAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaNumericAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
