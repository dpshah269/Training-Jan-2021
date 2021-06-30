import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMinLengthAsyncAddValidatorComponent } from './dynamic-min-length-async-add-validator.component';

describe('DynamicMinLengthAsyncAddValidatorComponent', () => {
  let component: DynamicMinLengthAsyncAddValidatorComponent;
  let fixture: ComponentFixture<DynamicMinLengthAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicMinLengthAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicMinLengthAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
