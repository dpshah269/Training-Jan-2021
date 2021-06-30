import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueAddDecoratorComponent } from './unique-add-decorator.component';

describe('UniqueAddDecoratorComponent', () => {
  let component: UniqueAddDecoratorComponent;
  let fixture: ComponentFixture<UniqueAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
