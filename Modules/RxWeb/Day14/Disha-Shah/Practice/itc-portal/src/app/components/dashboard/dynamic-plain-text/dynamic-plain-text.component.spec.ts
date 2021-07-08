import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPlainTextComponent } from './dynamic-plain-text.component';

describe('DynamicPlainTextComponent', () => {
  let component: DynamicPlainTextComponent;
  let fixture: ComponentFixture<DynamicPlainTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicPlainTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPlainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
