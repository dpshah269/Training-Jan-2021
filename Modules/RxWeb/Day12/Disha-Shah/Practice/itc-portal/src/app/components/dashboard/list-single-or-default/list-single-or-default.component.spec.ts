import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleOrDefaultComponent } from './list-single-or-default.component';

describe('ListSingleOrDefaultComponent', () => {
  let component: ListSingleOrDefaultComponent;
  let fixture: ComponentFixture<ListSingleOrDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSingleOrDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleOrDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
