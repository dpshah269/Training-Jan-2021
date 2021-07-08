import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBasicComponent } from './dynamic-basic.component';

describe('DynamicBasicComponent', () => {
  let component: DynamicBasicComponent;
  let fixture: ComponentFixture<DynamicBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
