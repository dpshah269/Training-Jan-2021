import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBanAsyncAddValidatorComponent } from './iban-async-add-validator.component';

describe('IBanAsyncAddValidatorComponent', () => {
  let component: IBanAsyncAddValidatorComponent;
  let fixture: ComponentFixture<IBanAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IBanAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IBanAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
