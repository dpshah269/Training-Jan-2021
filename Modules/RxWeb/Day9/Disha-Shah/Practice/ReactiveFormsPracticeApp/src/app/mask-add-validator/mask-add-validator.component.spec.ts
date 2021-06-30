import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskAddValidatorComponent } from './mask-add-validator.component';

describe('MaskAddValidatorComponent', () => {
  let component: MaskAddValidatorComponent;
  let fixture: ComponentFixture<MaskAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
