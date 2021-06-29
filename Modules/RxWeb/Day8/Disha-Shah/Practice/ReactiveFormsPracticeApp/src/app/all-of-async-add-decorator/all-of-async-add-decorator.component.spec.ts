import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOfAsyncAddDecoratorComponent } from './all-of-async-add-decorator.component';

describe('AllOfAsyncAddDecoratorComponent', () => {
  let component: AllOfAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<AllOfAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOfAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOfAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
