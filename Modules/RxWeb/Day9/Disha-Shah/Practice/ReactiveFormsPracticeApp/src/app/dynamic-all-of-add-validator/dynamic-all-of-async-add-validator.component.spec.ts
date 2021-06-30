import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAllOfAsyncAddValidatorComponent } from './dynamic-all-of-async-add-validator.component';

describe('DynamicAllOfAsyncAddValidatorComponent', () => {
  let component: DynamicAllOfAsyncAddValidatorComponent;
  let fixture: ComponentFixture<DynamicAllOfAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAllOfAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAllOfAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
