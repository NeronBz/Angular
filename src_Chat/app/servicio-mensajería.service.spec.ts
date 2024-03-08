import { TestBed } from '@angular/core/testing';

import { ServicioMensajeríaService } from './servicio-mensajería.service';

describe('ServicioMensajeríaService', () => {
  let service: ServicioMensajeríaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMensajeríaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
