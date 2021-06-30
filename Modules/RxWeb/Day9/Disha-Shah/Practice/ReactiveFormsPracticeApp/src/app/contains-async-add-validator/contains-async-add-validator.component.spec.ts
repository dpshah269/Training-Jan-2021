import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainsAsyncAddValidatorComponent } from './contains-async-add-validator.component';

describe('ContainsAsyncAddValidatorComponent', () => {
  let component: ContainsAsyncAddValidatorComponent;
  let fixture: ComponentFixture<ContainsAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainsAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainsAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
