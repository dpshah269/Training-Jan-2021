import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetControlsAndFormgroupsOnlyValidatorComponent } from './reset-controls-and-formgroups-only-validator.component';

describe('ResetControlsAndFormgroupsOnlyValidatorComponent', () => {
  let component: ResetControlsAndFormgroupsOnlyValidatorComponent;
  let fixture: ComponentFixture<ResetControlsAndFormgroupsOnlyValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetControlsAndFormgroupsOnlyValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetControlsAndFormgroupsOnlyValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
