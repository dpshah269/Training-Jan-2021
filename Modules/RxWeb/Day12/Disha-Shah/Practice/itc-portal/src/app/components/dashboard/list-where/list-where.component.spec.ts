import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWhereComponent } from './list-where.component';

describe('ListWhereComponent', () => {
  let component: ListWhereComponent;
  let fixture: ComponentFixture<ListWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
