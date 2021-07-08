import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicresetformValueComponent } from './dynamicresetform-value.component';

describe('DynamicresetformValueComponent', () => {
  let component: DynamicresetformValueComponent;
  let fixture: ComponentFixture<DynamicresetformValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicresetformValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicresetformValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
