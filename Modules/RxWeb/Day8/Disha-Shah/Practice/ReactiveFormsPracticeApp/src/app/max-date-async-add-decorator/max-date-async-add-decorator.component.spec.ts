import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxDateAsyncAddDecoratorComponent } from './max-date-async-add-decorator.component';

describe('MaxDateAsyncAddDecoratorComponent', () => {
  let component: MaxDateAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MaxDateAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxDateAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxDateAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
