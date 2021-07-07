import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInlineComponent } from './radio-inline.component';

describe('RadioInlineComponent', () => {
  let component: RadioInlineComponent;
  let fixture: ComponentFixture<RadioInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
