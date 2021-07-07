import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicfileCompleteComponent } from './dynamicfile-complete.component';

describe('DynamicfileCompleteComponent', () => {
  let component: DynamicfileCompleteComponent;
  let fixture: ComponentFixture<DynamicfileCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicfileCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicfileCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
