import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfAsyncAddValidatorComponent } from './one-of-async-add-validator.component';

describe('OneOfAsyncAddValidatorComponent', () => {
  let component: OneOfAsyncAddValidatorComponent;
  let fixture: ComponentFixture<OneOfAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOfAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOfAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
