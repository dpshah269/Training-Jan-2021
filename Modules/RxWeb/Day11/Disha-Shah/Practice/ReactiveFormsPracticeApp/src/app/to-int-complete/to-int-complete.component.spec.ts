import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToIntCompleteComponent } from './to-int-complete.component';

describe('ToIntCompleteComponent', () => {
  let component: ToIntCompleteComponent;
  let fixture: ComponentFixture<ToIntCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToIntCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToIntCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
