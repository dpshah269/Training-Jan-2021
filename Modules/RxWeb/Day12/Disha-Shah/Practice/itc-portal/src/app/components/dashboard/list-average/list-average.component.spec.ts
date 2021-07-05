import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAverageComponent } from './list-average.component';

describe('ListAverageComponent', () => {
  let component: ListAverageComponent;
  let fixture: ComponentFixture<ListAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
