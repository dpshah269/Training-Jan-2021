import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortAddValidatorComponent } from './port-add-validator.component';

describe('PortAddValidatorComponent', () => {
  let component: PortAddValidatorComponent;
  let fixture: ComponentFixture<PortAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
