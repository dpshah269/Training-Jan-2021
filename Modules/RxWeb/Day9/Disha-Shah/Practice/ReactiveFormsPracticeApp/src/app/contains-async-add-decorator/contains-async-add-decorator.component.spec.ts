import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainsAsyncAddDecoratorComponent } from './contains-async-add-decorator.component';

describe('ContainsAsyncAddDecoratorComponent', () => {
  let component: ContainsAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<ContainsAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainsAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainsAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
