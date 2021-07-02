import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndMessagesAddValidatorComponent } from './back-end-messages-add-validator.component';

describe('BackEndMessagesAddValidatorComponent', () => {
  let component: BackEndMessagesAddValidatorComponent;
  let fixture: ComponentFixture<BackEndMessagesAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndMessagesAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndMessagesAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
