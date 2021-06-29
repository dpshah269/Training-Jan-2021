import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanEqualToAsyncAddDecoratorComponent } from './less-than-equal-to-async-add-decorator.component';

describe('LessThanEqualToAsyncAddDecoratorComponent', () => {
  let component: LessThanEqualToAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<LessThanEqualToAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanEqualToAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanEqualToAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
