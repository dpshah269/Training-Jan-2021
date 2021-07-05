import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderByDescendingComponent } from './list-order-by-descending.component';

describe('ListOrderByDescendingComponent', () => {
  let component: ListOrderByDescendingComponent;
  let fixture: ComponentFixture<ListOrderByDescendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderByDescendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderByDescendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
