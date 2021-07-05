import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemoveAtComponent } from './list-remove-at.component';

describe('ListRemoveAtComponent', () => {
  let component: ListRemoveAtComponent;
  let fixture: ComponentFixture<ListRemoveAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemoveAtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemoveAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
