import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAdvanceLayoutComponent } from './dynamic-advance-layout.component';

describe('DynamicAdvanceLayoutComponent', () => {
  let component: DynamicAdvanceLayoutComponent;
  let fixture: ComponentFixture<DynamicAdvanceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAdvanceLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAdvanceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
