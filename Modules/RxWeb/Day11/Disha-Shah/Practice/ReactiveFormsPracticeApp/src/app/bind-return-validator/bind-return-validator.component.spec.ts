import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindReturnValidatorComponent } from './bind-return-validator.component';

describe('BindReturnValidatorComponent', () => {
  let component: BindReturnValidatorComponent;
  let fixture: ComponentFixture<BindReturnValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindReturnValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindReturnValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
