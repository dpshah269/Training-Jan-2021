import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTimeAsyncAddValidatorComponent } from './max-time-async-add-validator.component';

describe('MaxTimeAsyncAddValidatorComponent', () => {
  let component: MaxTimeAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MaxTimeAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxTimeAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTimeAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
