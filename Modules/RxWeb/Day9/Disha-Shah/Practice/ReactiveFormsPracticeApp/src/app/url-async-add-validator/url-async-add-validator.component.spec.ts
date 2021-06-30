import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAsyncAddValidatorComponent } from './url-async-add-validator.component';

describe('UrlAsyncAddValidatorComponent', () => {
  let component: UrlAsyncAddValidatorComponent;
  let fixture: ComponentFixture<UrlAsyncAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlAsyncAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlAsyncAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
