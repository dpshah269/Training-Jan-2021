import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsWithAsyncAddValidatorComponent } from './starts-with-async-add-validator.component';

describe('StartsWithAsyncAddValidatorComponent', () => {
  let component: StartsWithAsyncAddValidatorComponent;
  let fixture: ComponentFixture<StartsWithAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartsWithAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsWithAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
