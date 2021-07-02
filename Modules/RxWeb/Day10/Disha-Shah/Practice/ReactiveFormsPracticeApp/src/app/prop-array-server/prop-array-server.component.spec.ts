import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropArrayServerComponent } from './prop-array-server.component';

describe('PropArrayServerComponent', () => {
  let component: PropArrayServerComponent;
  let fixture: ComponentFixture<PropArrayServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropArrayServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropArrayServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
