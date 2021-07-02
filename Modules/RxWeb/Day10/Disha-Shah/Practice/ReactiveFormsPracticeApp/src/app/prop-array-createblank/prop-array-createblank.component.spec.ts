import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropArrayCreateblankComponent } from './prop-array-createblank.component';

describe('PropArrayCreateblankComponent', () => {
  let component: PropArrayCreateblankComponent;
  let fixture: ComponentFixture<PropArrayCreateblankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropArrayCreateblankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropArrayCreateblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
