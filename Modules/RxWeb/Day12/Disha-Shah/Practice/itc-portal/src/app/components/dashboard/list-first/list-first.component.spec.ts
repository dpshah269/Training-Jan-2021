import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFirstComponent } from './list-first.component';

describe('ListFirstComponent', () => {
  let component: ListFirstComponent;
  let fixture: ComponentFixture<ListFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
