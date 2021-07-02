import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchCompleteValidatorComponent } from './patch-complete-validator.component';

describe('PatchCompleteValidatorComponent', () => {
  let component: PatchCompleteValidatorComponent;
  let fixture: ComponentFixture<PatchCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
