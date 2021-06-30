import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsWithAsyncAddValidatorComponent } from './ends-with-async-add-validator.component';

describe('EndsWithAsyncAddValidatorComponent', () => {
  let component: EndsWithAsyncAddValidatorComponent;
  let fixture: ComponentFixture<EndsWithAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndsWithAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndsWithAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
