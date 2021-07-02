import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixAddComponent } from './suffix-add.component';

describe('SuffixAddComponent', () => {
  let component: SuffixAddComponent;
  let fixture: ComponentFixture<SuffixAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffixAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
