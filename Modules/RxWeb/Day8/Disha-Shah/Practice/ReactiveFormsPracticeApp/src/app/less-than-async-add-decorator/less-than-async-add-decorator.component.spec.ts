import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanAsyncAddDecoratorComponent } from './less-than-async-add-decorator.component';

describe('LessThanAsyncAddDecoratorComponent', () => {
  let component: LessThanAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<LessThanAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessThanAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
