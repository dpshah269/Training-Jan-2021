import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenAddValidatorComponent } from './even-add-validator.component';

describe('EvenAddValidatorComponent', () => {
  let component: EvenAddValidatorComponent;
  let fixture: ComponentFixture<EvenAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
