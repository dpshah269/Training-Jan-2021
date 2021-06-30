import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeAddDecoratorComponent } from './compose-add-decorator.component';

describe('ComposeAddDecoratorComponent', () => {
  let component: ComposeAddDecoratorComponent;
  let fixture: ComponentFixture<ComposeAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
