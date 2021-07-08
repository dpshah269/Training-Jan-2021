import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicresetformDefinedPropsOnlyComponent } from './dynamicresetform-defined-props-only.component';

describe('DynamicresetformDefinedPropsOnlyComponent', () => {
  let component: DynamicresetformDefinedPropsOnlyComponent;
  let fixture: ComponentFixture<DynamicresetformDefinedPropsOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicresetformDefinedPropsOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicresetformDefinedPropsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
