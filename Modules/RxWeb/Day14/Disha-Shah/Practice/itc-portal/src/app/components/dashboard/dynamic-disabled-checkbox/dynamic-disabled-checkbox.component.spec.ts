import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDisabledCheckboxComponent } from './dynamic-disabled-checkbox.component';

describe('DynamicDisabledCheckboxComponent', () => {
  let component: DynamicDisabledCheckboxComponent;
  let fixture: ComponentFixture<DynamicDisabledCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDisabledCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDisabledCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
