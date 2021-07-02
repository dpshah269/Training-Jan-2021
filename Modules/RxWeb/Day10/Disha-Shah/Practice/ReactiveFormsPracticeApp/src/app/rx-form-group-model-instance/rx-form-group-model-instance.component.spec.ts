import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFormGroupModelInstanceComponent } from './rx-form-group-model-instance.component';

describe('RxFormGroupModelInstanceComponent', () => {
  let component: RxFormGroupModelInstanceComponent;
  let fixture: ComponentFixture<RxFormGroupModelInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxFormGroupModelInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFormGroupModelInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
