import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAsyncAddDecoratorComponent } from './time-async-add-decorator.component';

describe('TimeAsyncAddDecoratorComponent', () => {
  let component: TimeAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<TimeAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
