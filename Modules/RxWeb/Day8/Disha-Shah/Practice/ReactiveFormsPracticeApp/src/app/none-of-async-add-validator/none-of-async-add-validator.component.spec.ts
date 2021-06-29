import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneOfAsyncAddValidatorComponent } from './none-of-async-add-validator.component';

describe('NoneOfAsyncAddValidatorComponent', () => {
  let component: NoneOfAsyncAddValidatorComponent;
  let fixture: ComponentFixture<NoneOfAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneOfAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneOfAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
