import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSumComponent } from './list-sum.component';

describe('ListSumComponent', () => {
  let component: ListSumComponent;
  let fixture: ComponentFixture<ListSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
