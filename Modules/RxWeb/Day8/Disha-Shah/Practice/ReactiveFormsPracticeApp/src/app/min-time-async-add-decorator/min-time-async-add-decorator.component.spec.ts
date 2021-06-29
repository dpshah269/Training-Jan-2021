import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinTimeAsyncAddDecoratorComponent } from './min-time-async-add-decorator.component';

describe('MinTimeAsyncAddDecoratorComponent', () => {
  let component: MinTimeAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MinTimeAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinTimeAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinTimeAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
