import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStaticComponent } from './radio-static.component';

describe('RadioStaticComponent', () => {
  let component: RadioStaticComponent;
  let fixture: ComponentFixture<RadioStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
