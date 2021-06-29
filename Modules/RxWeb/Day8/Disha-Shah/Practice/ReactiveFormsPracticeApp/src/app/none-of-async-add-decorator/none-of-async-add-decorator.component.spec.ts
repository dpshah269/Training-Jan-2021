import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneOfAsyncAddDecoratorComponent } from './none-of-async-add-decorator.component';

describe('NoneOfAsyncAddDecoratorComponent', () => {
  let component: NoneOfAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<NoneOfAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneOfAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneOfAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
