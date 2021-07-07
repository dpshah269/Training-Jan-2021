import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyCompleteComponent } from './readonly-complete.component';

describe('ReadonlyCompleteComponent', () => {
  let component: ReadonlyCompleteComponent;
  let fixture: ComponentFixture<ReadonlyCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
