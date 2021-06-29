import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanAsyncAddDecoratorComponent } from './greater-than-async-add-decorator.component';

describe('GreaterThanAsyncAddDecoratorComponent', () => {
  let component: GreaterThanAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<GreaterThanAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
