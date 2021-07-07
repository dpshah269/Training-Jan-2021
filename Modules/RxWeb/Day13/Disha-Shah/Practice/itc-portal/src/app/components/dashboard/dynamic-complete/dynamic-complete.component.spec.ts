import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompleteComponent } from './dynamic-complete.component';

describe('DynamicCompleteComponent', () => {
  let component: DynamicCompleteComponent;
  let fixture: ComponentFixture<DynamicCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
