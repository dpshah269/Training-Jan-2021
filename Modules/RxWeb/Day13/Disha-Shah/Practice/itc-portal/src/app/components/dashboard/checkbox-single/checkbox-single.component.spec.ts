import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSingleComponent } from './checkbox-single.component';

describe('CheckboxSingleComponent', () => {
  let component: CheckboxSingleComponent;
  let fixture: ComponentFixture<CheckboxSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
