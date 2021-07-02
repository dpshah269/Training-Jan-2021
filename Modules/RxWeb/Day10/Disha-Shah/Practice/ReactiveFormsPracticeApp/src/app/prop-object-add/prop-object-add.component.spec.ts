import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropObjectAddComponent } from './prop-object-add.component';

describe('PropObjectAddComponent', () => {
  let component: PropObjectAddComponent;
  let fixture: ComponentFixture<PropObjectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropObjectAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropObjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
