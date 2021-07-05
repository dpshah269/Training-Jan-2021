import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLastOrDefaultComponent } from './list-last-or-default.component';

describe('ListLastOrDefaultComponent', () => {
  let component: ListLastOrDefaultComponent;
  let fixture: ComponentFixture<ListLastOrDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLastOrDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLastOrDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
