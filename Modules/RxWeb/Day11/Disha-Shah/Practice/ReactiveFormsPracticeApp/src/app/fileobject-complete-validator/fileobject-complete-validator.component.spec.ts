import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileobjectCompleteValidatorComponent } from './fileobject-complete-validator.component';

describe('FileobjectCompleteValidatorComponent', () => {
  let component: FileobjectCompleteValidatorComponent;
  let fixture: ComponentFixture<FileobjectCompleteValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileobjectCompleteValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileobjectCompleteValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
