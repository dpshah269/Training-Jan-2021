import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceAsyncAddValidatorComponent } from './choice-async-add-validator.component';

describe('ChoiceAsyncAddValidatorComponent', () => {
  let component: ChoiceAsyncAddValidatorComponent;
  let fixture: ComponentFixture<ChoiceAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
