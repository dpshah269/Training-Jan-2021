import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTakeComponent } from './list-take.component';

describe('ListTakeComponent', () => {
  let component: ListTakeComponent;
  let fixture: ComponentFixture<ListTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
