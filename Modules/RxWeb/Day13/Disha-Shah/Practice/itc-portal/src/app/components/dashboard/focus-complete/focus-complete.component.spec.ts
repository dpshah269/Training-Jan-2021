import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusCompleteComponent } from './focus-complete.component';

describe('FocusCompleteComponent', () => {
  let component: FocusCompleteComponent;
  let fixture: ComponentFixture<FocusCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
