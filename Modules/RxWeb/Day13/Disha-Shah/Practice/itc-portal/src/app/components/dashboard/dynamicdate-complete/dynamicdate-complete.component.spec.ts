import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdateCompleteComponent } from './dynamicdate-complete.component';

describe('DynamicdateCompleteComponent', () => {
  let component: DynamicdateCompleteComponent;
  let fixture: ComponentFixture<DynamicdateCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicdateCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdateCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
