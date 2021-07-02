import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitDynamicValidatorComponent } from './commit-dynamic-validator.component';

describe('CommitDynamicValidatorComponent', () => {
  let component: CommitDynamicValidatorComponent;
  let fixture: ComponentFixture<CommitDynamicValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitDynamicValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitDynamicValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
