import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLengthAsyncAddDecoratorComponent } from './min-length-async-add-decorator.component';

describe('MinLengthAsyncAddDecoratorComponent', () => {
  let component: MinLengthAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MinLengthAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinLengthAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinLengthAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
