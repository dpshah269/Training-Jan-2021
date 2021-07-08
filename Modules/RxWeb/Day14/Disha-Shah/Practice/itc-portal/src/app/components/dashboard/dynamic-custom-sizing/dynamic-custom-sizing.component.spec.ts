import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCustomSizingComponent } from './dynamic-custom-sizing.component';

describe('DynamicCustomSizingComponent', () => {
  let component: DynamicCustomSizingComponent;
  let fixture: ComponentFixture<DynamicCustomSizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCustomSizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCustomSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
