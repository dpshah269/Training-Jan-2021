import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDateAddComponent } from './to-date-add.component';

describe('ToDateAddComponent', () => {
  let component: ToDateAddComponent;
  let fixture: ComponentFixture<ToDateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDateAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
