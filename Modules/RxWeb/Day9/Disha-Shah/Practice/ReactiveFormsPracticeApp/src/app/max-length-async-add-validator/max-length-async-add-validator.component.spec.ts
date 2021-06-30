import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLengthAsyncAddValidatorComponent } from './max-length-async-add-validator.component';

describe('MaxLengthAsyncAddValidatorComponent', () => {
  let component: MaxLengthAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MaxLengthAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxLengthAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxLengthAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
