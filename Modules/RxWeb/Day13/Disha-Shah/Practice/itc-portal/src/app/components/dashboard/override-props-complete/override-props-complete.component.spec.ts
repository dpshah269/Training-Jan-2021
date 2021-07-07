import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverridePropsCompleteComponent } from './override-props-complete.component';

describe('OverridePropsCompleteComponent', () => {
  let component: OverridePropsCompleteComponent;
  let fixture: ComponentFixture<OverridePropsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverridePropsCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverridePropsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
