import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTextareaComponent } from './code-textarea.component';

describe('CodeTextareaComponent', () => {
  let component: CodeTextareaComponent;
  let fixture: ComponentFixture<CodeTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
