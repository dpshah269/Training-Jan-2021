import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropObjectServerComponent } from './prop-object-server.component';

describe('PropObjectServerComponent', () => {
  let component: PropObjectServerComponent;
  let fixture: ComponentFixture<PropObjectServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropObjectServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropObjectServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
