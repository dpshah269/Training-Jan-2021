import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationGenericentitiesComponent } from './formbuilderconfiguration-genericentities.component';

describe('FormbuilderconfigurationGenericentitiesComponent', () => {
  let component: FormbuilderconfigurationGenericentitiesComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationGenericentitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationGenericentitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationGenericentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
