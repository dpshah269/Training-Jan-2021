import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationDynamicdefaultComponent } from './formbuilderconfiguration-dynamicdefault.component';

describe('FormbuilderconfigurationDynamicdefaultComponent', () => {
  let component: FormbuilderconfigurationDynamicdefaultComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationDynamicdefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationDynamicdefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationDynamicdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
