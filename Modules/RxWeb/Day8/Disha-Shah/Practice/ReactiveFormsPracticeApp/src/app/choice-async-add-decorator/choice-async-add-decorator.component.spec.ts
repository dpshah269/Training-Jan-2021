import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceAsyncAddDecoratorComponent } from './choice-async-add-decorator.component';

describe('ChoiceAsyncAddDecoratorComponent', () => {
  let component: ChoiceAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<ChoiceAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
