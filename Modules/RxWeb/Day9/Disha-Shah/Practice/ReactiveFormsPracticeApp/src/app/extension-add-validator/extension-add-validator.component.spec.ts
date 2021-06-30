import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionAddValidatorComponent } from './extension-add-validator.component';

describe('ExtensionAddValidatorComponent', () => {
  let component: ExtensionAddValidatorComponent;
  let fixture: ComponentFixture<ExtensionAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
