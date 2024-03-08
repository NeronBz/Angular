import { TestBed } from '@angular/core/testing';

import { ServicioPrivadoService } from './servicio-privado.service';

describe('ServicioPrivadoService', () => {
  let service: ServicioPrivadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPrivadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
