import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root',
})
export class ServicioHotelService {
  constructor(private httpHotel: HttpClient) {}
  obtenerHotel(): Observable<Hotel[]> {
    return this.httpHotel.get<Hotel[]>(
      'http://moralo.atwebpages.com/paradores/obtenerParadores.php'
    );
  }
}
