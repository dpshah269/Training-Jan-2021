import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetWithValidatorComponent } from './reset-with-validator.component';

describe('ResetWithValidatorComponent', () => {
  let component: ResetWithValidatorComponent;
  let fixture: ComponentFixture<ResetWithValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetWithValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetWithValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
