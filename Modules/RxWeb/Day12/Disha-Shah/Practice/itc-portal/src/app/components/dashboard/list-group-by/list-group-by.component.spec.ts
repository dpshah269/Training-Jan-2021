import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupByComponent } from './list-group-by.component';

describe('ListGroupByComponent', () => {
  let component: ListGroupByComponent;
  let fixture: ComponentFixture<ListGroupByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
