import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationIncludepropsComponent } from './formbuilderconfiguration-includeprops.component';

describe('FormbuilderconfigurationIncludepropsComponent', () => {
  let component: FormbuilderconfigurationIncludepropsComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationIncludepropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationIncludepropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationIncludepropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
