import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternAsyncAddValidatorComponent } from './pattern-async-add-validator.component';

describe('PatternAsyncAddValidatorComponent', () => {
  let component: PatternAsyncAddValidatorComponent;
  let fixture: ComponentFixture<PatternAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
