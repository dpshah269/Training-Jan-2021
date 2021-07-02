import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyModifiedValidatorComponent } from './dirty-modified-validator.component';

describe('DirtyModifiedValidatorComponent', () => {
  let component: DirtyModifiedValidatorComponent;
  let fixture: ComponentFixture<DirtyModifiedValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirtyModifiedValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyModifiedValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
