import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinDateAsyncAddDecoratorComponent } from './min-date-async-add-decorator.component';

describe('MinDateAsyncAddDecoratorComponent', () => {
  let component: MinDateAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MinDateAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinDateAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinDateAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
