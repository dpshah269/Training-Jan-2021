import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanAsyncAddValidatorComponent } from './greater-than-async-add-validator.component';

describe('GreaterThanAsyncAddValidatorComponent', () => {
  let component: GreaterThanAsyncAddValidatorComponent;
  let fixture: ComponentFixture<GreaterThanAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
