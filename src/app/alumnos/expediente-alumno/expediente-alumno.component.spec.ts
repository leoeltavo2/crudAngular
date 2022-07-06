import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteAlumnoComponent } from './expediente-alumno.component';

describe('ExpedienteAlumnoComponent', () => {
  let component: ExpedienteAlumnoComponent;
  let fixture: ComponentFixture<ExpedienteAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedienteAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
