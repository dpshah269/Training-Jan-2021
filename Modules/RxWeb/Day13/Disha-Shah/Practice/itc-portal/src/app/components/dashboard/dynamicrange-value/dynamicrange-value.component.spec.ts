import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicrangeValueComponent } from './dynamicrange-value.component';

describe('DynamicrangeValueComponent', () => {
  let component: DynamicrangeValueComponent;
  let fixture: ComponentFixture<DynamicrangeValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicrangeValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicrangeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
