import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicfileMultipleComponent } from './dynamicfile-multiple.component';

describe('DynamicfileMultipleComponent', () => {
  let component: DynamicfileMultipleComponent;
  let fixture: ComponentFixture<DynamicfileMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicfileMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicfileMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
