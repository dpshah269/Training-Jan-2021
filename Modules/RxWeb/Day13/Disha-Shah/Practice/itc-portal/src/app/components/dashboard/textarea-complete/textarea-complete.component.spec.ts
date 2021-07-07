import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaCompleteComponent } from './textarea-complete.component';

describe('TextareaCompleteComponent', () => {
  let component: TextareaCompleteComponent;
  let fixture: ComponentFixture<TextareaCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
