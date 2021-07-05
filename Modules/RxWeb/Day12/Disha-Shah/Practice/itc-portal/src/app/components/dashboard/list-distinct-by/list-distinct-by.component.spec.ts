import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistinctByComponent } from './list-distinct-by.component';

describe('ListDistinctByComponent', () => {
  let component: ListDistinctByComponent;
  let fixture: ComponentFixture<ListDistinctByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDistinctByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistinctByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
