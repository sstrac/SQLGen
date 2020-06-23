import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorV2Component } from './generator-v2.component';

describe('GeneratorV2Component', () => {
  let component: GeneratorV2Component;
  let fixture: ComponentFixture<GeneratorV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
