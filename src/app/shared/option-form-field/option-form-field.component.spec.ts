import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFormFieldComponent } from './option-form-field.component';

describe('OptionFormFieldComponent', () => {
  let component: OptionFormFieldComponent;
  let fixture: ComponentFixture<OptionFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
