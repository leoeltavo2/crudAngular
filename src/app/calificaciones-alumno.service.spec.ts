import { TestBed } from '@angular/core/testing';

import { CalificacionesAlumnoService } from './calificaciones-alumno.service';

describe('CalificacionesAlumnoService', () => {
  let service: CalificacionesAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionesAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
