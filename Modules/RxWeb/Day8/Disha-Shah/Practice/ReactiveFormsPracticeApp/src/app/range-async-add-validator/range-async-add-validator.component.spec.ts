import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAsyncAddValidatorComponent } from './range-async-add-validator.component';

describe('RangeAsyncAddValidatorComponent', () => {
  let component: RangeAsyncAddValidatorComponent;
  let fixture: ComponentFixture<RangeAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
