import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncvalidationCompleteComponent } from './asyncvalidation-complete.component';

describe('AsyncvalidationCompleteComponent', () => {
  let component: AsyncvalidationCompleteComponent;
  let fixture: ComponentFixture<AsyncvalidationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncvalidationCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncvalidationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
