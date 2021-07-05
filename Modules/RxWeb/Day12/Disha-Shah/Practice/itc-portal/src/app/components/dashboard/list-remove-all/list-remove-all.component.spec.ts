import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemoveAllComponent } from './list-remove-all.component';

describe('ListRemoveAllComponent', () => {
  let component: ListRemoveAllComponent;
  let fixture: ComponentFixture<ListRemoveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemoveAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemoveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
