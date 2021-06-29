import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNumberAsyncAddDecoratorComponent } from './min-number-async-add-decorator.component';

describe('MinNumberAsyncAddDecoratorComponent', () => {
  let component: MinNumberAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<MinNumberAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinNumberAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNumberAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
