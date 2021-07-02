import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrCompleteValidatorComponent } from './or-complete-validator.component';

describe('OrCompleteValidatorComponent', () => {
  let component: OrCompleteValidatorComponent;
  let fixture: ComponentFixture<OrCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
