import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainsComponent } from './list-contains.component';

describe('ListContainsComponent', () => {
  let component: ListContainsComponent;
  let fixture: ComponentFixture<ListContainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
