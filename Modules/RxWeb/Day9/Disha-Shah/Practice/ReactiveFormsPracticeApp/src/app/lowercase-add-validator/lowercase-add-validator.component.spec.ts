import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseAddValidatorComponent } from './lowercase-add-validator.component';

describe('LowercaseAddValidatorComponent', () => {
  let component: LowercaseAddValidatorComponent;
  let fixture: ComponentFixture<LowercaseAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowercaseAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowercaseAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
