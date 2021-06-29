import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAsyncAddDecoratorComponent } from './range-async-add-decorator.component';

describe('RangeAsyncAddDecoratorComponent', () => {
  let component: RangeAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<RangeAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
