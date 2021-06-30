import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeAddValidatorComponent } from './compose-add-validator.component';

describe('ComposeAddValidatorComponent', () => {
  let component: ComposeAddValidatorComponent;
  let fixture: ComponentFixture<ComposeAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
