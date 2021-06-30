import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAddValidatorComponent } from './file-add-validator.component';

describe('FileAddValidatorComponent', () => {
  let component: FileAddValidatorComponent;
  let fixture: ComponentFixture<FileAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
