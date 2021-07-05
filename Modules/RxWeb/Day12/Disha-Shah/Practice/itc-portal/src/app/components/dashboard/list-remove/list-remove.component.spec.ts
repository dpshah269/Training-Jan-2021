import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemoveComponent } from './list-remove.component';

describe('ListRemoveComponent', () => {
  let component: ListRemoveComponent;
  let fixture: ComponentFixture<ListRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
