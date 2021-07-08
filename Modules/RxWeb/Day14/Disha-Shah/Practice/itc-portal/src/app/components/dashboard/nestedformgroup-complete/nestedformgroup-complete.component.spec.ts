import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedformgroupCompleteComponent } from './nestedformgroup-complete.component';

describe('NestedformgroupCompleteComponent', () => {
  let component: NestedformgroupCompleteComponent;
  let fixture: ComponentFixture<NestedformgroupCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedformgroupCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedformgroupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
