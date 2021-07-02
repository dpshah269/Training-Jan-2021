import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropArrayEntityComponent } from './prop-array-entity.component';

describe('PropArrayEntityComponent', () => {
  let component: PropArrayEntityComponent;
  let fixture: ComponentFixture<PropArrayEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropArrayEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropArrayEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
