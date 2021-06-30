import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEmptyAddValidatorComponent } from './not-empty-add-validator.component';

describe('NotEmptyAddValidatorComponent', () => {
  let component: NotEmptyAddValidatorComponent;
  let fixture: ComponentFixture<NotEmptyAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotEmptyAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotEmptyAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
