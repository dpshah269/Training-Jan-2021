import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxDateAsyncAddValidatorComponent } from './max-date-async-add-validator.component';

describe('MaxDateAsyncAddValidatorComponent', () => {
  let component: MaxDateAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MaxDateAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxDateAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxDateAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
