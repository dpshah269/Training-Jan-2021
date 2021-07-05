import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistinctComponent } from './list-distinct.component';

describe('ListDistinctComponent', () => {
  let component: ListDistinctComponent;
  let fixture: ComponentFixture<ListDistinctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDistinctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
