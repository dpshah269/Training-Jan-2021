import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreValueHookCompleteComponent } from './pre-value-hook-complete.component';

describe('PreValueHookCompleteComponent', () => {
  let component: PreValueHookCompleteComponent;
  let fixture: ComponentFixture<PreValueHookCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreValueHookCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreValueHookCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
