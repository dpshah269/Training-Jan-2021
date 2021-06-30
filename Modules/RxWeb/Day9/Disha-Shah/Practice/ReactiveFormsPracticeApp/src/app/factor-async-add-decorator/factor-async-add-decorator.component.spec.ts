import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorAsyncAddDecoratorComponent } from './factor-async-add-decorator.component';

describe('FactorAsyncAddDecoratorComponent', () => {
  let component: FactorAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<FactorAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
