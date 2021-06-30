import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAddTemplateComponent } from './async-add-template.component';

describe('AsyncAddTemplateComponent', () => {
  let component: AsyncAddTemplateComponent;
  let fixture: ComponentFixture<AsyncAddTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncAddTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncAddTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
