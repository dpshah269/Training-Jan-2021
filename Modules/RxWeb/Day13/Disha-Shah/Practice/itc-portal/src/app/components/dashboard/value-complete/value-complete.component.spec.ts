import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCompleteComponent } from './value-complete.component';

describe('ValueCompleteComponent', () => {
  let component: ValueCompleteComponent;
  let fixture: ComponentFixture<ValueCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
