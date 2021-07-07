import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInlineComponent } from './checkbox-inline.component';

describe('CheckboxInlineComponent', () => {
  let component: CheckboxInlineComponent;
  let fixture: ComponentFixture<CheckboxInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
