import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideCompleteComponent } from './hide-complete.component';

describe('HideCompleteComponent', () => {
  let component: HideCompleteComponent;
  let fixture: ComponentFixture<HideCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
