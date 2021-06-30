import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongitudeAddValidatorComponent } from './longitude-add-validator.component';

describe('LongitudeAddValidatorComponent', () => {
  let component: LongitudeAddValidatorComponent;
  let fixture: ComponentFixture<LongitudeAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongitudeAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongitudeAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
