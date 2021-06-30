import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentAddValidatorComponent } from './different-add-validator.component';

describe('DifferentAddValidatorComponent', () => {
  let component: DifferentAddValidatorComponent;
  let fixture: ComponentFixture<DifferentAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
