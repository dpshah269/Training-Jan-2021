import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTimeAsyncAddDecoratorComponent } from './max-time-async-add-decorator.component';

describe('MaxTimeAsyncAddDecoratorComponent', () => {
  let component: MaxTimeAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MaxTimeAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxTimeAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTimeAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
