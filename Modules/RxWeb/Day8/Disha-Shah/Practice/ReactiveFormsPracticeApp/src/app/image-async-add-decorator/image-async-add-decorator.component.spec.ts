import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAsyncAddDecoratorComponent } from './image-async-add-decorator.component';

describe('ImageAsyncAddDecoratorComponent', () => {
  let component: ImageAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<ImageAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
