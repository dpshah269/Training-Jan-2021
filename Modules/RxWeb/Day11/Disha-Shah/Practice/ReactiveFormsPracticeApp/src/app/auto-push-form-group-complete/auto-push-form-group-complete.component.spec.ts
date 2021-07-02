import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPushFormGroupCompleteComponent } from './auto-push-form-group-complete.component';

describe('AutoPushFormGroupCompleteComponent', () => {
  let component: AutoPushFormGroupCompleteComponent;
  let fixture: ComponentFixture<AutoPushFormGroupCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPushFormGroupCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPushFormGroupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
