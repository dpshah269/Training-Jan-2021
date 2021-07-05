import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleComponent } from './list-single.component';

describe('ListSingleComponent', () => {
  let component: ListSingleComponent;
  let fixture: ComponentFixture<ListSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
