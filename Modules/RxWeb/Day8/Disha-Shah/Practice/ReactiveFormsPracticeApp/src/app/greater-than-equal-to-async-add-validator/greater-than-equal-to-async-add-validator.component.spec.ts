import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanEqualToAsyncAddValidatorComponent } from './greater-than-equal-to-async-add-validator.component';

describe('GreaterThanEqualToAsyncAddValidatorComponent', () => {
  let component: GreaterThanEqualToAsyncAddValidatorComponent;
  let fixture: ComponentFixture<GreaterThanEqualToAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanEqualToAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanEqualToAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
