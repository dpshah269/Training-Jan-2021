import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCompleteValidatorComponent } from './bind-complete-validator.component';

describe('BindCompleteValidatorComponent', () => {
  let component: BindCompleteValidatorComponent;
  let fixture: ComponentFixture<BindCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
