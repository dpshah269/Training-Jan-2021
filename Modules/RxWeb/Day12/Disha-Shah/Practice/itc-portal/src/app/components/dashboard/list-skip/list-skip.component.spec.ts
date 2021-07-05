import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkipComponent } from './list-skip.component';

describe('ListSkipComponent', () => {
  let component: ListSkipComponent;
  let fixture: ComponentFixture<ListSkipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
