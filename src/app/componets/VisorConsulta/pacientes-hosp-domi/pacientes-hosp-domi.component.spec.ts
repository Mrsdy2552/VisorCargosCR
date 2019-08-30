import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesHospDomiComponent } from './pacientes-hosp-domi.component';

describe('PacientesHospDomiComponent', () => {
  let component: PacientesHospDomiComponent;
  let fixture: ComponentFixture<PacientesHospDomiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesHospDomiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesHospDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
