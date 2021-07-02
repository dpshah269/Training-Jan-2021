import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToStringAddComponent } from './to-string-add.component';

describe('ToStringAddComponent', () => {
  let component: ToStringAddComponent;
  let fixture: ComponentFixture<ToStringAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToStringAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToStringAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
