import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaAsyncAddValidatorComponent } from './alpha-async-add-validator.component';

describe('AlphaAsyncAddValidatorComponent', () => {
  let component: AlphaAsyncAddValidatorComponent;
  let fixture: ComponentFixture<AlphaAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
