import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAddDecoratorComponent } from './file-add-decorator.component';

describe('FileAddDecoratorComponent', () => {
  let component: FileAddDecoratorComponent;
  let fixture: ComponentFixture<FileAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
