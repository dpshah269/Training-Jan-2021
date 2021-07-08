import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDisabledRadioComponent } from './dynamic-disabled-radio.component';

describe('DynamicDisabledRadioComponent', () => {
  let component: DynamicDisabledRadioComponent;
  let fixture: ComponentFixture<DynamicDisabledRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDisabledRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDisabledRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
