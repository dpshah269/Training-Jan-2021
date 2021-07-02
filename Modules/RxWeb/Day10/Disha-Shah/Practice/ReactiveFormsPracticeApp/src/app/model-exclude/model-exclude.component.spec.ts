import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelExcludeComponent } from './model-exclude.component';

describe('ModelExcludeComponent', () => {
  let component: ModelExcludeComponent;
  let fixture: ComponentFixture<ModelExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelExcludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
