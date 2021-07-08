import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPrependTextboxComponent } from './dynamic-prepend-textbox.component';

describe('DynamicPrependTextboxComponent', () => {
  let component: DynamicPrependTextboxComponent;
  let fixture: ComponentFixture<DynamicPrependTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicPrependTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPrependTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
