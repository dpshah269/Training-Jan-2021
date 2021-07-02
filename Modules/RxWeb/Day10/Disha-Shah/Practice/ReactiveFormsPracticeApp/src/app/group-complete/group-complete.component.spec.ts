import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCompleteComponent } from './group-complete.component';

describe('GroupCompleteComponent', () => {
  let component: GroupCompleteComponent;
  let fixture: ComponentFixture<GroupCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
