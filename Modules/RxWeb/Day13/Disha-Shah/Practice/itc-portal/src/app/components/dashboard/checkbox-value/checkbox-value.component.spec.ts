import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxValueComponent } from './checkbox-value.component';

describe('CheckboxValueComponent', () => {
  let component: CheckboxValueComponent;
  let fixture: ComponentFixture<CheckboxValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
