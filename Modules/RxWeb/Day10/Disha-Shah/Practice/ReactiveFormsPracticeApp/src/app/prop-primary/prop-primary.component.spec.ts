import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropPrimaryComponent } from './prop-primary.component';

describe('PropPrimaryComponent', () => {
  let component: PropPrimaryComponent;
  let fixture: ComponentFixture<PropPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
