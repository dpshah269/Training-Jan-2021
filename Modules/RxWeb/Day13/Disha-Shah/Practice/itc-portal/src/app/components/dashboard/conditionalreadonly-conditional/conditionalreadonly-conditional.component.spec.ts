import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalreadonlyConditionalComponent } from './conditionalreadonly-conditional.component';

describe('ConditionalreadonlyConditionalComponent', () => {
  let component: ConditionalreadonlyConditionalComponent;
  let fixture: ComponentFixture<ConditionalreadonlyConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalreadonlyConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalreadonlyConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
