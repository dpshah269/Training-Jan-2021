import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicresetformControlsOnlyComponent } from './dynamicresetform-controls-only.component';

describe('DynamicresetformControlsOnlyComponent', () => {
  let component: DynamicresetformControlsOnlyComponent;
  let fixture: ComponentFixture<DynamicresetformControlsOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicresetformControlsOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicresetformControlsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
