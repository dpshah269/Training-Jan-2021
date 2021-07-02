import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoubleAddComponent } from './to-double-add.component';

describe('ToDoubleAddComponent', () => {
  let component: ToDoubleAddComponent;
  let fixture: ComponentFixture<ToDoubleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoubleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoubleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
