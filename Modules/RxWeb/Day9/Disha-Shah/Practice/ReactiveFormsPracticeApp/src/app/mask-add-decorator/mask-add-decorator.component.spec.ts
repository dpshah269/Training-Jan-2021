import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskAddDecoratorComponent } from './mask-add-decorator.component';

describe('MaskAddDecoratorComponent', () => {
  let component: MaskAddDecoratorComponent;
  let fixture: ComponentFixture<MaskAddDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskAddDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskAddDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
