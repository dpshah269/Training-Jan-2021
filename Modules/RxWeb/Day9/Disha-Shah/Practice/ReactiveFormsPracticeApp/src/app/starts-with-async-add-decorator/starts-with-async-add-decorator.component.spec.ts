import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsWithAsyncAddDecoratorComponent } from './starts-with-async-add-decorator.component';

describe('StartsWithAsyncAddDecoratorComponent', () => {
  let component: StartsWithAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<StartsWithAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartsWithAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsWithAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
