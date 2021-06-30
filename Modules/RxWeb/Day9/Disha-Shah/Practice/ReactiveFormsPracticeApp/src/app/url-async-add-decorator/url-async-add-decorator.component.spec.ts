import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlAsyncAddDecoratorComponent } from './url-async-add-decorator.component';

describe('UrlAsyncAddDecoratorComponent', () => {
  let component: UrlAsyncAddDecoratorComponent;
  let fixture: ComponentFixture<UrlAsyncAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlAsyncAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlAsyncAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
