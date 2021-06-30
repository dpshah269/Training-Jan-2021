import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAddValidatorComponent } from './json-add-validator.component';

describe('JsonAddValidatorComponent', () => {
  let component: JsonAddValidatorComponent;
  let fixture: ComponentFixture<JsonAddValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAddValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAddValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
