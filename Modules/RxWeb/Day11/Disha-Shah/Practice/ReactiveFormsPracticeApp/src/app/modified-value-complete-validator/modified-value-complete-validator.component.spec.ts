import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedValueCompleteValidatorComponent } from './modified-value-complete-validator.component';

describe('ModifiedValueCompleteValidatorComponent', () => {
  let component: ModifiedValueCompleteValidatorComponent;
  let fixture: ComponentFixture<ModifiedValueCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiedValueCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedValueCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
