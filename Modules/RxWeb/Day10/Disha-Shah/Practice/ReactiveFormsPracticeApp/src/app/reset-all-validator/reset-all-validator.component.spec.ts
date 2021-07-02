import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAllValidatorComponent } from './reset-all-validator.component';

describe('ResetAllValidatorComponent', () => {
  let component: ResetAllValidatorComponent;
  let fixture: ComponentFixture<ResetAllValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetAllValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAllValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
