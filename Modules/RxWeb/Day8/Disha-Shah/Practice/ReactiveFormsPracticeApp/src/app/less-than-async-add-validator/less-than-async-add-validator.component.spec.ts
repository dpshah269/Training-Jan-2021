import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanAsyncAddValidatorComponent } from './less-than-async-add-validator.component';

describe('LessThanAsyncAddValidatorComponent', () => {
  let component: LessThanAsyncAddValidatorComponent;
  let fixture: ComponentFixture<LessThanAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
