import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLengthAsyncAddDecoratorComponent } from './max-length-async-add-decorator.component';

describe('MaxLengthAsyncAddDecoratorComponent', () => {
  let component: MaxLengthAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MaxLengthAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxLengthAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxLengthAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
