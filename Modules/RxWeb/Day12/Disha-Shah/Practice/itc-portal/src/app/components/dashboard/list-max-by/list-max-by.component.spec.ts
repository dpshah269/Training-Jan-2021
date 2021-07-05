import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaxByComponent } from './list-max-by.component';

describe('ListMaxByComponent', () => {
  let component: ListMaxByComponent;
  let fixture: ComponentFixture<ListMaxByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMaxByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaxByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
