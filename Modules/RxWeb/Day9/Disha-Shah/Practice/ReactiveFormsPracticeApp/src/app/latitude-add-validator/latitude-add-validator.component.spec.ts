import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatitudeAddValidatorComponent } from './latitude-add-validator.component';

describe('LatitudeAddValidatorComponent', () => {
  let component: LatitudeAddValidatorComponent;
  let fixture: ComponentFixture<LatitudeAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatitudeAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatitudeAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
