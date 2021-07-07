import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxCompleteComponent } from './textbox-complete.component';

describe('TextboxCompleteComponent', () => {
  let component: TextboxCompleteComponent;
  let fixture: ComponentFixture<TextboxCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
