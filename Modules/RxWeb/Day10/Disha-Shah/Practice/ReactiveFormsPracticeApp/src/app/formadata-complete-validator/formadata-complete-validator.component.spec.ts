import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadataCompleteValidatorComponent } from './formadata-complete-validator.component';

describe('FormadataCompleteValidatorComponent', () => {
  let component: FormadataCompleteValidatorComponent;
  let fixture: ComponentFixture<FormadataCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadataCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadataCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
