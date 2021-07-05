import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddRangeComponent } from './list-add-range.component';

describe('ListAddRangeComponent', () => {
  let component: ListAddRangeComponent;
  let fixture: ComponentFixture<ListAddRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
