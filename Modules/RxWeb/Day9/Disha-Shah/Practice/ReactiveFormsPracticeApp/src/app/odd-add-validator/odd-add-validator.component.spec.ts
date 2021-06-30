import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddAddValidatorComponent } from './odd-add-validator.component';

describe('OddAddValidatorComponent', () => {
  let component: OddAddValidatorComponent;
  let fixture: ComponentFixture<OddAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
