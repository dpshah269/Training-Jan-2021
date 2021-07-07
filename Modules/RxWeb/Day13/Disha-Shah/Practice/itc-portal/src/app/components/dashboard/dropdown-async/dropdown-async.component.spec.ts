import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAsyncComponent } from './dropdown-async.component';

describe('DropdownAsyncComponent', () => {
  let component: DropdownAsyncComponent;
  let fixture: ComponentFixture<DropdownAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
