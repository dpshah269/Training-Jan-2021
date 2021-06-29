import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTimeAsyncAddValidatorComponent } from './min-time-async-add-validator.component';

describe('MinTimeAsyncAddValidatorComponent', () => {
  let component: MinTimeAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MinTimeAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinTimeAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTimeAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
