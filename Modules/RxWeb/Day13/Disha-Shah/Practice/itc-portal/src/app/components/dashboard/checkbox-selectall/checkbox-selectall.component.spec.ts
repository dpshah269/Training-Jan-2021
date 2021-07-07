import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSelectallComponent } from './checkbox-selectall.component';

describe('CheckboxSelectallComponent', () => {
  let component: CheckboxSelectallComponent;
  let fixture: ComponentFixture<CheckboxSelectallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxSelectallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSelectallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
