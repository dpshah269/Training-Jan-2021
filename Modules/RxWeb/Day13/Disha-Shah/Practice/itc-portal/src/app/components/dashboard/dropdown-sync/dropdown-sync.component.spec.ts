import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSyncComponent } from './dropdown-sync.component';

describe('DropdownSyncComponent', () => {
  let component: DropdownSyncComponent;
  let fixture: ComponentFixture<DropdownSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
