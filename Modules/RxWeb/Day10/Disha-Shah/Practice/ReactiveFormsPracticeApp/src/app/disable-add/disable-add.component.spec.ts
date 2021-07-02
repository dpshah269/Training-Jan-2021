import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableAddComponent } from './disable-add.component';

describe('DisableAddComponent', () => {
  let component: DisableAddComponent;
  let fixture: ComponentFixture<DisableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
