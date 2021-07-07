import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicrangeComponent } from './dynamicrange.component';

describe('DynamicrangeComponent', () => {
  let component: DynamicrangeComponent;
  let fixture: ComponentFixture<DynamicrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
