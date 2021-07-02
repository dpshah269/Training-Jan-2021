import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtrimAddComponent } from './ltrim-add.component';

describe('LtrimAddComponent', () => {
  let component: LtrimAddComponent;
  let fixture: ComponentFixture<LtrimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtrimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtrimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
