import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfAsyncAddDecoratorComponent } from './one-of-async-add-decorator.component';

describe('OneOfAsyncAddDecoratorComponent', () => {
  let component: OneOfAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<OneOfAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOfAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOfAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
