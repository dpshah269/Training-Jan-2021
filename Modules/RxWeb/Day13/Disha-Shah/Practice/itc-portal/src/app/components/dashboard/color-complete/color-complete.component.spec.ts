import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCompleteComponent } from './color-complete.component';

describe('ColorCompleteComponent', () => {
  let component: ColorCompleteComponent;
  let fixture: ComponentFixture<ColorCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
