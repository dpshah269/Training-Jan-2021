import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetValueValidatorComponent } from './reset-value-validator.component';

describe('ResetValueValidatorComponent', () => {
  let component: ResetValueValidatorComponent;
  let fixture: ComponentFixture<ResetValueValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetValueValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetValueValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
