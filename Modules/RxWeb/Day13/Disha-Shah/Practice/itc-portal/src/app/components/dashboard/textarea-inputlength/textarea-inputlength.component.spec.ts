import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaInputlengthComponent } from './textarea-inputlength.component';

describe('TextareaInputlengthComponent', () => {
  let component: TextareaInputlengthComponent;
  let fixture: ComponentFixture<TextareaInputlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaInputlengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaInputlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
