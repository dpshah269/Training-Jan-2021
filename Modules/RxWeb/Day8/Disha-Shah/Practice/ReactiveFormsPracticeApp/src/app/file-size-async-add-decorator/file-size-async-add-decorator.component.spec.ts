import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeAsyncAddDecoratorComponent } from './file-size-async-add-decorator.component';

describe('FileSizeAsyncAddDecoratorComponent', () => {
  let component: FileSizeAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<FileSizeAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileSizeAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizeAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
