import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCompleteComponent } from './description-complete.component';

describe('DescriptionCompleteComponent', () => {
  let component: DescriptionCompleteComponent;
  let fixture: ComponentFixture<DescriptionCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
