import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountComponent } from './list-count.component';

describe('ListCountComponent', () => {
  let component: ListCountComponent;
  let fixture: ComponentFixture<ListCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
