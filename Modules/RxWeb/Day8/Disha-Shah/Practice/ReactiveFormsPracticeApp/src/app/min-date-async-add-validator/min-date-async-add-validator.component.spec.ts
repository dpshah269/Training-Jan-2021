import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinDateAsyncAddValidatorComponent } from './min-date-async-add-validator.component';

describe('MinDateAsyncAddValidatorComponent', () => {
  let component: MinDateAsyncAddValidatorComponent;
  let fixture: ComponentFixture<MinDateAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinDateAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinDateAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
