import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndAddValidatorComponent } from './and-add-validator.component';

describe('AndAddValidatorComponent', () => {
  let component: AndAddValidatorComponent;
  let fixture: ComponentFixture<AndAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
