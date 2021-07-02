import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderconfigurationIgnoreundefinedComponent } from './formbuilderconfiguration-ignoreundefined.component';

describe('FormbuilderconfigurationIgnoreundefinedComponent', () => {
  let component: FormbuilderconfigurationIgnoreundefinedComponent;
  let fixture: ComponentFixture<FormbuilderconfigurationIgnoreundefinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderconfigurationIgnoreundefinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderconfigurationIgnoreundefinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
