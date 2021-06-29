import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardAsyncAddDecoratorComponent } from './credit-card-async-add-decorator.component';

describe('CreditCardAsyncAddDecoratorComponent', () => {
  let component: CreditCardAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<CreditCardAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
