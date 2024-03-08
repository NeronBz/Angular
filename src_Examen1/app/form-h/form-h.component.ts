import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ServicioHotelService } from '../servicio-hotel.service';

@Component({
  selector: 'app-form-h',
  templateUrl: './form-h.component.html',
  styleUrls: ['./form-h.component.css'],
})
export class FormHComponent implements OnInit {
  nombre!: string;
  paradorSeleccionado!: string;
  fechaE!: Date;
  fechaS!: Date;
  paradoresList: string[] = [];

  constructor(private servicio: ServicioHotelService) {}

  ngOnInit(): void {
    this.fechaE = this.obtenerFechaManana();
    this.fechaS = this.obtenerFechaManana();

    this.servicio.obtenerHotel().subscribe((hoteles: Hotel[]) => {
      this.paradoresList = hoteles.map((hotel: Hotel) => hotel.nombre);
    });
  }

  obtenerFechaManana(): Date {
    const hoy = new Date();
    const manana = new Date(hoy);
    manana.setDate(manana.getDate() + 1);
    return manana;
  }

  reservar(): void {
    if (this.paradorSeleccionado) {
      const diasReserva = this.calcularDiasReserva();
      if (diasReserva <= 0) {
        alert('Tiene que haber un día mínimo entre una fecha y otra');
      } else {
        alert(
          `Parador: ${this.paradorSeleccionado}. Total días: ${diasReserva}`
        );
      }
    } else {
      alert('Por favor selecciona un parador antes de reservar.');
    }
  }

  calcularDiasReserva(): number {
    if (this.fechaE && this.fechaS) {
      const unDia = 24 * 60 * 60 * 1000;
      const diferencia = Math.abs(
        this.fechaS.getTime() - this.fechaE.getTime()
      );
      return Math.ceil(diferencia / unDia);
    }
    return 0;
  }
}
