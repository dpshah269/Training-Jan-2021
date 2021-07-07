import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalplaceholderConditionalComponent } from './conditionalplaceholder-conditional.component';

describe('ConditionalplaceholderConditionalComponent', () => {
  let component: ConditionalplaceholderConditionalComponent;
  let fixture: ComponentFixture<ConditionalplaceholderConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalplaceholderConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalplaceholderConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
