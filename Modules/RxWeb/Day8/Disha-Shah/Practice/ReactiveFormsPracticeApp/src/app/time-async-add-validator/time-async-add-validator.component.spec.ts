import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAsyncAddValidatorComponent } from './time-async-add-validator.component';

describe('TimeAsyncAddValidatorComponent', () => {
  let component: TimeAsyncAddValidatorComponent;
  let fixture: ComponentFixture<TimeAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
