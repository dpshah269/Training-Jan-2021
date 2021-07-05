import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFirstOrDefaultComponent } from './list-first-or-default.component';

describe('ListFirstOrDefaultComponent', () => {
  let component: ListFirstOrDefaultComponent;
  let fixture: ComponentFixture<ListFirstOrDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFirstOrDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFirstOrDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
