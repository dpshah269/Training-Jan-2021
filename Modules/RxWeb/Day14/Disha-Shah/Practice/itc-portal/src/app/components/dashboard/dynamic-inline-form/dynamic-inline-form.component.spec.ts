import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInlineFormComponent } from './dynamic-inline-form.component';

describe('DynamicInlineFormComponent', () => {
  let component: DynamicInlineFormComponent;
  let fixture: ComponentFixture<DynamicInlineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicInlineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicInlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
