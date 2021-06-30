import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAddDecoratorComponent } from './async-add-decorator.component';

describe('AsyncAddDecoratorComponent', () => {
  let component: AsyncAddDecoratorComponent;
  let fixture: ComponentFixture<AsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
