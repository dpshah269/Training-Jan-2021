import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationArrayobjectComponent } from './formbuilderconfiguration-arrayobject.component';

describe('FormbuilderconfigurationArrayobjectComponent', () => {
  let component: FormbuilderconfigurationArrayobjectComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationArrayobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationArrayobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationArrayobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
