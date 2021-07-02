import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationAllpropsComponent } from './formbuilderconfiguration-allprops.component';

describe('FormbuilderconfigurationAllpropsComponent', () => {
  let component: FormbuilderconfigurationAllpropsComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationAllpropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationAllpropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationAllpropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
