import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAllOfAsyncAddDecoratorComponent } from './dynamic-all-of-async-add-decorator.component';

describe('DynamicAllOfAsyncAddDecoratorComponent', () => {
  let component: DynamicAllOfAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<DynamicAllOfAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicAllOfAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAllOfAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
