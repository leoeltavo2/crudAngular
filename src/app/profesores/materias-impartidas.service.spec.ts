import { TestBed } from '@angular/core/testing';

import { MateriasImpartidasService } from './materias-impartidas.service';

describe('MateriasImpartidasService', () => {
  let service: MateriasImpartidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasImpartidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
