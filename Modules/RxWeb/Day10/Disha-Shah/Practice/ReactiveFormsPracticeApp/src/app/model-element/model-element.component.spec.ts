import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelElementComponent } from './model-element.component';

describe('ModelElementComponent', () => {
  let component: ModelElementComponent;
  let fixture: ComponentFixture<ModelElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
