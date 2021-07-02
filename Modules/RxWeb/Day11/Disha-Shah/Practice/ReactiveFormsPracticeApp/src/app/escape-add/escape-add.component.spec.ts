import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeAddComponent } from './escape-add.component';

describe('EscapeAddComponent', () => {
  let component: EscapeAddComponent;
  let fixture: ComponentFixture<EscapeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
