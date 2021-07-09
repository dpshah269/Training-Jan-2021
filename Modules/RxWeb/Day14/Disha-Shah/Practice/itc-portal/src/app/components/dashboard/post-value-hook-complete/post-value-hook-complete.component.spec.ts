import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostValueHookCompleteComponent } from './post-value-hook-complete.component';

describe('PostValueHookCompleteComponent', () => {
  let component: PostValueHookCompleteComponent;
  let fixture: ComponentFixture<PostValueHookCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostValueHookCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostValueHookCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
