import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDefaultComponent } from './prop-default.component';

describe('PropDefaultComponent', () => {
  let component: PropDefaultComponent;
  let fixture: ComponentFixture<PropDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
