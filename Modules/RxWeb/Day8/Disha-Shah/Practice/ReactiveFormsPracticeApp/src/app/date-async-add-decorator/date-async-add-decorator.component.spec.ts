import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAsyncAddDecoratorComponent } from './date-async-add-decorator.component';

describe('DateAsyncAddDecoratorComponent', () => {
  let component: DateAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<DateAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
