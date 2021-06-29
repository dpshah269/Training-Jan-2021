import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeAsyncAddValidatorComponent } from './file-size-async-add-validator.component';

describe('FileSizeAsyncAddValidatorComponent', () => {
  let component: FileSizeAsyncAddValidatorComponent;
  let fixture: ComponentFixture<FileSizeAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileSizeAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizeAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
