import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicpasswordComponent } from './dynamicpassword.component';

describe('DynamicpasswordComponent', () => {
  let component: DynamicpasswordComponent;
  let fixture: ComponentFixture<DynamicpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
