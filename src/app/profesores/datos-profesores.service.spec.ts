import { TestBed } from '@angular/core/testing';

import { DatosProfesoresService } from './datos-profesores.service';

describe('DatosProfesoresService', () => {
  let service: DatosProfesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosProfesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
