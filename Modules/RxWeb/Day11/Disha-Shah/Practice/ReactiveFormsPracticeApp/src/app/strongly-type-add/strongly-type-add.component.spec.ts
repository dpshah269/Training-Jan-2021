import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronglyTypeAddComponent } from './strongly-type-add.component';

describe('StronglyTypeAddComponent', () => {
  let component: StronglyTypeAddComponent;
  let fixture: ComponentFixture<StronglyTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronglyTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronglyTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
