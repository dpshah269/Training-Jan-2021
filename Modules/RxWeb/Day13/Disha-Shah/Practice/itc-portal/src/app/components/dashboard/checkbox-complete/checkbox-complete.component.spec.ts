import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCompleteComponent } from './checkbox-complete.component';

describe('CheckboxCompleteComponent', () => {
  let component: CheckboxCompleteComponent;
  let fixture: ComponentFixture<CheckboxCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
