import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientespaiComponent } from './pacientespai.component';

describe('PacientespaiComponent', () => {
  let component: PacientespaiComponent;
  let fixture: ComponentFixture<PacientespaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientespaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientespaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
