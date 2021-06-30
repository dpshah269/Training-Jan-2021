import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueAddValidatorComponent } from './unique-add-validator.component';

describe('UniqueAddValidatorComponent', () => {
  let component: UniqueAddValidatorComponent;
  let fixture: ComponentFixture<UniqueAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
