import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropArrayAddComponent } from './prop-array-add.component';

describe('PropArrayAddComponent', () => {
  let component: PropArrayAddComponent;
  let fixture: ComponentFixture<PropArrayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropArrayAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropArrayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
