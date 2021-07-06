import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompleteComponent } from './get-complete.component';

describe('GetCompleteComponent', () => {
  let component: GetCompleteComponent;
  let fixture: ComponentFixture<GetCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
