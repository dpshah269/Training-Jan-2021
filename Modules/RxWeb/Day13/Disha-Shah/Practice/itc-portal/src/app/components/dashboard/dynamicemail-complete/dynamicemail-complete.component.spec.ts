import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicemailCompleteComponent } from './dynamicemail-complete.component';

describe('DynamicemailCompleteComponent', () => {
  let component: DynamicemailCompleteComponent;
  let fixture: ComponentFixture<DynamicemailCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicemailCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicemailCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
