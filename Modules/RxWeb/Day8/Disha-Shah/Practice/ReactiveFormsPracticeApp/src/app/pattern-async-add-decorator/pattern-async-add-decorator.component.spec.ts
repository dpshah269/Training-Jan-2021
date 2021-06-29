import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternAsyncAddDecoratorComponent } from './pattern-async-add-decorator.component';

describe('PatternAsyncAddDecoratorComponent', () => {
  let component: PatternAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<PatternAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
