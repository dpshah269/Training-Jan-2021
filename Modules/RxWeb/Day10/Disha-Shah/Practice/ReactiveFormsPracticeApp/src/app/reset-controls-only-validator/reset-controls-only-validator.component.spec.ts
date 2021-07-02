import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetControlsOnlyValidatorComponent } from './reset-controls-only-validator.component';

describe('ResetControlsOnlyValidatorComponent', () => {
  let component: ResetControlsOnlyValidatorComponent;
  let fixture: ComponentFixture<ResetControlsOnlyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetControlsOnlyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetControlsOnlyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
