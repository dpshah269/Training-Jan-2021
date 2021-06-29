import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNumberAsyncAddValidatorComponent } from './min-number-async-add-validator.component';

describe('MinNumberAsyncAddValidatorComponent', () => {
  let component: MinNumberAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MinNumberAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinNumberAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNumberAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
