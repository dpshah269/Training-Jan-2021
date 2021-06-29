import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNumberAsyncAddDecoratorComponent } from './max-number-async-add-decorator.component';

describe('MaxNumberAsyncAddDecoratorComponent', () => {
  let component: MaxNumberAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MaxNumberAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxNumberAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxNumberAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
