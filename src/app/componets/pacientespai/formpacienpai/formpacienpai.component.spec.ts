import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpacienpaiComponent } from './formpacienpai.component';

describe('FormpacienpaiComponent', () => {
  let component: FormpacienpaiComponent;
  let fixture: ComponentFixture<FormpacienpaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormpacienpaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpacienpaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
