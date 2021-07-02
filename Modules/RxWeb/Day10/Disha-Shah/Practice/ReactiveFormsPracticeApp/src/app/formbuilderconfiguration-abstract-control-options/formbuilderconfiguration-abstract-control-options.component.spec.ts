import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationAbstractControlOptionsComponent } from './formbuilderconfiguration-abstract-control-options.component';

describe('FormbuilderconfigurationAbstractControlOptionsComponent', () => {
  let component: FormbuilderconfigurationAbstractControlOptionsComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationAbstractControlOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationAbstractControlOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationAbstractControlOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
