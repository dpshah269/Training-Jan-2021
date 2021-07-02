import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupAddComponent } from './formgroup-add.component';

describe('FormgroupAddComponent', () => {
  let component: FormgroupAddComponent;
  let fixture: ComponentFixture<FormgroupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgroupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
