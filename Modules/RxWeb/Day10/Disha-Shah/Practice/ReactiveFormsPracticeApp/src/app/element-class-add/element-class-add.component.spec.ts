import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementClassAddComponent } from './element-class-add.component';

describe('ElementClassAddComponent', () => {
  let component: ElementClassAddComponent;
  let fixture: ComponentFixture<ElementClassAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementClassAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
