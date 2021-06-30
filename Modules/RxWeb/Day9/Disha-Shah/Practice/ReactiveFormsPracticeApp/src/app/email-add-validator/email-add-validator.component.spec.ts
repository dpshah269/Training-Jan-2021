import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddValidatorComponent } from './email-add-validator.component';

describe('EmailAddValidatorComponent', () => {
  let component: EmailAddValidatorComponent;
  let fixture: ComponentFixture<EmailAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
