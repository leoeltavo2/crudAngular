import { TestBed } from '@angular/core/testing';

import { InfoProfesorService } from './info-profesor.service';

describe('InfoProfesorService', () => {
  let service: InfoProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
