import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiAddValidatorComponent } from './ascii-add-validator.component';

describe('AsciiAddValidatorComponent', () => {
  let component: AsciiAddValidatorComponent;
  let fixture: ComponentFixture<AsciiAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsciiAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsciiAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
