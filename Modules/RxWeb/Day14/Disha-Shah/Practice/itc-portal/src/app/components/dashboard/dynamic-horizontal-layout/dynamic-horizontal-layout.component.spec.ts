import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHorizontalLayoutComponent } from './dynamic-horizontal-layout.component';

describe('DynamicHorizontalLayoutComponent', () => {
  let component: DynamicHorizontalLayoutComponent;
  let fixture: ComponentFixture<DynamicHorizontalLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicHorizontalLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHorizontalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
