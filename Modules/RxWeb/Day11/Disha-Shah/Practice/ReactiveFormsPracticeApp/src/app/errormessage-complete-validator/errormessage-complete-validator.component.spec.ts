import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormessageCompleteValidatorComponent } from './errormessage-complete-validator.component';

describe('ErrormessageCompleteValidatorComponent', () => {
  let component: ErrormessageCompleteValidatorComponent;
  let fixture: ComponentFixture<ErrormessageCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrormessageCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrormessageCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
