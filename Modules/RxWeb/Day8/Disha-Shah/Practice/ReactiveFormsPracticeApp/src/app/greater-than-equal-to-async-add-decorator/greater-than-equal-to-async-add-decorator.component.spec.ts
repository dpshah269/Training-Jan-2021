import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanEqualToAsyncAddDecoratorComponent } from './greater-than-equal-to-async-add-decorator.component';

describe('GreaterThanEqualToAsyncAddDecoratorComponent', () => {
  let component: GreaterThanEqualToAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<GreaterThanEqualToAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanEqualToAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreaterThanEqualToAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
