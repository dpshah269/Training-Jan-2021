import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicurlCompleteComponent } from './dynamicurl-complete.component';

describe('DynamicurlCompleteComponent', () => {
  let component: DynamicurlCompleteComponent;
  let fixture: ComponentFixture<DynamicurlCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicurlCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicurlCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
