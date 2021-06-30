import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLengthAsyncAddValidatorComponent } from './min-length-async-add-validator.component';

describe('MinLengthAsyncAddValidatorComponent', () => {
  let component: MinLengthAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MinLengthAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinLengthAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinLengthAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
