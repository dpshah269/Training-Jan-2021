import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaSizeComponent } from './textarea-size.component';

describe('TextareaSizeComponent', () => {
  let component: TextareaSizeComponent;
  let fixture: ComponentFixture<TextareaSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
