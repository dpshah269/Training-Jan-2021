import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorAsyncAddValidatorComponent } from './factor-async-add-validator.component';

describe('FactorAsyncAddValidatorComponent', () => {
  let component: FactorAsyncAddValidatorComponent;
  let fixture: ComponentFixture<FactorAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
