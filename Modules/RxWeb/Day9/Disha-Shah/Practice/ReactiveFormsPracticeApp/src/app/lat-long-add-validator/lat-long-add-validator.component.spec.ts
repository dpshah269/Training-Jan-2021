import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatLongAddValidatorComponent } from './lat-long-add-validator.component';

describe('LatLongAddValidatorComponent', () => {
  let component: LatLongAddValidatorComponent;
  let fixture: ComponentFixture<LatLongAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatLongAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLongAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
