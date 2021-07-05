import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConcatComponent } from './list-concat.component';

describe('ListConcatComponent', () => {
  let component: ListConcatComponent;
  let fixture: ComponentFixture<ListConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
