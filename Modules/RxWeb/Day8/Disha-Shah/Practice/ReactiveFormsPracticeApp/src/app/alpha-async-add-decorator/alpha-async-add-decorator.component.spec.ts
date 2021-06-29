import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaAsyncAddDecoratorComponent } from './alpha-async-add-decorator.component';

describe('AlphaAsyncAddDecoratorComponent', () => {
  let component: AlphaAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<AlphaAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
