import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronglyTypeDefinedComponent } from './strongly-type-defined.component';

describe('StronglyTypeDefinedComponent', () => {
  let component: StronglyTypeDefinedComponent;
  let fixture: ComponentFixture<StronglyTypeDefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronglyTypeDefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronglyTypeDefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
