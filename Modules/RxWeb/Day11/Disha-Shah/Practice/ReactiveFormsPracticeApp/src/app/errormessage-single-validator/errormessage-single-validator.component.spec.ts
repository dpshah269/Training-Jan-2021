import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormessageSingleValidatorComponent } from './errormessage-single-validator.component';

describe('ErrormessageSingleValidatorComponent', () => {
  let component: ErrormessageSingleValidatorComponent;
  let fixture: ComponentFixture<ErrormessageSingleValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrormessageSingleValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrormessageSingleValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
