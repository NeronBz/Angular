import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadoService {
  constructor(private httpEmpleado: HttpClient) {}
  obtenerEmpleado(): Observable<Empleado[]> {
    return this.httpEmpleado.get<Empleado[]>(
      'http://moralo.atwebpages.com/Empleados/getEmpleados.php'
    );
  }

  insertarEmpleado(empleado: Empleado) {
    return this.httpEmpleado.post(
      'http://moralo.atwebpages.com/Empleados/insertarEmpleado.php',
      empleado
    );
  }
}
