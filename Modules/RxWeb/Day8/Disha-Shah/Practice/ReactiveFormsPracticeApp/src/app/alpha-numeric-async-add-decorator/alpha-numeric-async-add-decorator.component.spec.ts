import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaNumericAsyncAddDecoratorComponent } from './alpha-numeric-async-add-decorator.component';

describe('AlphaNumericAsyncAddDecoratorComponent', () => {
  let component: AlphaNumericAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<AlphaNumericAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaNumericAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaNumericAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
