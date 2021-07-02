import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToFloatAddComponent } from './to-float-add.component';

describe('ToFloatAddComponent', () => {
  let component: ToFloatAddComponent;
  let fixture: ComponentFixture<ToFloatAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToFloatAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToFloatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
