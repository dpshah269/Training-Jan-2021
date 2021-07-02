import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndMessagesCompleteValidatorComponent } from './back-end-messages-complete-validator.component';

describe('BackEndMessagesCompleteValidatorComponent', () => {
  let component: BackEndMessagesCompleteValidatorComponent;
  let fixture: ComponentFixture<BackEndMessagesCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndMessagesCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndMessagesCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
