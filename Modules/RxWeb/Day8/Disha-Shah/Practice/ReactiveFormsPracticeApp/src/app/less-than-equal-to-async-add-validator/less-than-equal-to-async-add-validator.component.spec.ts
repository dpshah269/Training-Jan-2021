import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanEqualToAsyncAddValidatorComponent } from './less-than-equal-to-async-add-validator.component';

describe('LessThanEqualToAsyncAddValidatorComponent', () => {
  let component: LessThanEqualToAsyncAddValidatorComponent;
  let fixture: ComponentFixture<LessThanEqualToAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanEqualToAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanEqualToAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
