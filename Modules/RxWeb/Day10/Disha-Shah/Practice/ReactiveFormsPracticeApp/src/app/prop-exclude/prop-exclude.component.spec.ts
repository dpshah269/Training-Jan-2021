import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropExcludeComponent } from './prop-exclude.component';

describe('PropExcludeComponent', () => {
  let component: PropExcludeComponent;
  let fixture: ComponentFixture<PropExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropExcludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
