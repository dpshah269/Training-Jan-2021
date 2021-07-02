import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFormGroupErrorMessageSummaryComponent } from './rx-form-group-error-message-summary.component';

describe('RxFormGroupErrorMessageSummaryComponent', () => {
  let component: RxFormGroupErrorMessageSummaryComponent;
  let fixture: ComponentFixture<RxFormGroupErrorMessageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxFormGroupErrorMessageSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFormGroupErrorMessageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
