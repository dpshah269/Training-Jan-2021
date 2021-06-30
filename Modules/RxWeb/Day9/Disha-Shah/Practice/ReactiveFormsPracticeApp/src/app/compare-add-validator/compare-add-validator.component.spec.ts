import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareAddValidatorComponent } from './compare-add-validator.component';

describe('CompareAddValidatorComponent', () => {
  let component: CompareAddValidatorComponent;
  let fixture: ComponentFixture<CompareAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
