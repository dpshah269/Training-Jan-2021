import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAsyncAddValidatortorComponent } from './image-async-add-validatortor.component';

describe('ImageAsyncAddValidatortorComponent', () => {
  let component: ImageAsyncAddValidatortorComponent;
  let fixture: ComponentFixture<ImageAsyncAddValidatortorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAsyncAddValidatortorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAsyncAddValidatortorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
