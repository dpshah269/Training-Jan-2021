import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledCompleteComponent } from './disabled-complete.component';

describe('DisabledCompleteComponent', () => {
  let component: DisabledCompleteComponent;
  let fixture: ComponentFixture<DisabledCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
