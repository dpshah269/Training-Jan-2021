import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndsWithAsyncAddDecoratorComponent } from './ends-with-async-add-decorator.component';

describe('EndsWithAsyncAddDecoratorComponent', () => {
  let component: EndsWithAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<EndsWithAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndsWithAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndsWithAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
