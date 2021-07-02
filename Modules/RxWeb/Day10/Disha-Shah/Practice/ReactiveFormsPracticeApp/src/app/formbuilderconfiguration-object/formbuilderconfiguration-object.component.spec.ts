import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationObjectComponent } from './formbuilderconfiguration-object.component';

describe('FormbuilderconfigurationObjectComponent', () => {
  let component: FormbuilderconfigurationObjectComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
