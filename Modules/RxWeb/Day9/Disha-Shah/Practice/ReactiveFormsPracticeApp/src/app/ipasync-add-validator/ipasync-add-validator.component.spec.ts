import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPAsyncAddValidatorComponent } from './ipasync-add-validator.component';

describe('IPAsyncAddValidatorComponent', () => {
  let component: IPAsyncAddValidatorComponent;
  let fixture: ComponentFixture<IPAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
