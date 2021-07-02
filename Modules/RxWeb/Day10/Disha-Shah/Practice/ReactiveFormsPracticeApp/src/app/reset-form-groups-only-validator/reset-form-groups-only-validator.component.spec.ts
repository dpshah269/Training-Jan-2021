import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFormGroupsOnlyValidatorComponent } from './reset-form-groups-only-validator.component';

describe('ResetFormGroupsOnlyValidatorComponent', () => {
  let component: ResetFormGroupsOnlyValidatorComponent;
  let fixture: ComponentFixture<ResetFormGroupsOnlyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetFormGroupsOnlyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFormGroupsOnlyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
