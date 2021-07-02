import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtrimAddComponent } from './rtrim-add.component';

describe('RtrimAddComponent', () => {
  let component: RtrimAddComponent;
  let fixture: ComponentFixture<RtrimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtrimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtrimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
