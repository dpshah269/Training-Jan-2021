import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropServerComponent } from './prop-server.component';

describe('PropServerComponent', () => {
  let component: PropServerComponent;
  let fixture: ComponentFixture<PropServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
