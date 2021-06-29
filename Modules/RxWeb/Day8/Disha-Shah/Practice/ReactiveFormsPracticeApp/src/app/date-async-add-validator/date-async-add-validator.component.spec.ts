import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAsyncAddValidatorComponent } from './date-async-add-validator.component';

describe('DateAsyncAddValidatorComponent', () => {
  let component: DateAsyncAddValidatorComponent;
  let fixture: ComponentFixture<DateAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
