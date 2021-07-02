import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBooleanCompleteComponent } from './to-boolean-complete.component';

describe('ToBooleanCompleteComponent', () => {
  let component: ToBooleanCompleteComponent;
  let fixture: ComponentFixture<ToBooleanCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBooleanCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBooleanCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
