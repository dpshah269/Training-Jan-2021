import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderByComponent } from './list-order-by.component';

describe('ListOrderByComponent', () => {
  let component: ListOrderByComponent;
  let fixture: ComponentFixture<ListOrderByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
