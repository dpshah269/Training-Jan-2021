import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimAddComponent } from './trim-add.component';

describe('TrimAddComponent', () => {
  let component: TrimAddComponent;
  let fixture: ComponentFixture<TrimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
