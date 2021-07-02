import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropArrayMaxindexComponent } from './prop-array-maxindex.component';

describe('PropArrayMaxindexComponent', () => {
  let component: PropArrayMaxindexComponent;
  let fixture: ComponentFixture<PropArrayMaxindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropArrayMaxindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropArrayMaxindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
