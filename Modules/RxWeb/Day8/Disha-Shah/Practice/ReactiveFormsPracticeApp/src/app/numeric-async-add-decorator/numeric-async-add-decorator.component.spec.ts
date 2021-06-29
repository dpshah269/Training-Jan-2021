import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericAsyncAddDecoratorComponent } from './numeric-async-add-decorator.component';

describe('NumericAsyncAddDecoratorComponent', () => {
  let component: NumericAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<NumericAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
