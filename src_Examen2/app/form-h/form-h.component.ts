import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../hotel';
import { ServicioHotelService } from '../servicio-hotel.service';

@Component({
  selector: 'app-form-h',
  templateUrl: './form-h.component.html',
  styleUrls: ['./form-h.component.css'],
})
export class FormHComponent implements OnInit {
  miForm!: FormGroup;
  paradoresList: string[] = [];

  constructor(
    private fb: FormBuilder,
    private servicio: ServicioHotelService
  ) {}

  ngOnInit(): void {
    this.miForm = this.fb.group({
      nombre: ['', Validators.required],
      paradorSeleccionado: ['', Validators.required],
      fechaE: ['', Validators.required],
      fechaS: ['', Validators.required],
    });

    const fechaManana = this.obtenerFechaManana();
    this.miForm.patchValue({
      fechaE: fechaManana,
      fechaS: fechaManana,
    });

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
    if (this.miForm.valid) {
      const diasReserva = this.calcularDiasReserva();
      if (diasReserva <= 0) {
        alert('Tiene que haber un día mínimo entre una fecha y otra');
      } else {
        alert(
          `Parador: ${this.miForm.value.paradorSeleccionado}. Total días: ${diasReserva}`
        );
      }
    } else {
      alert('Por favor completa todos los campos del formulario.');
    }
  }

  calcularDiasReserva(): number {
    const unDia = 1000 * 60 * 60 * 24;
    const fechaE = new Date(this.miForm.value.fechaE);
    const fechaS = new Date(this.miForm.value.fechaS);

    if (fechaS < fechaE) {
      alert('La fecha de salida no puede ser anterior a la fecha de entrada.');
      return 0;
    }

    const diferenciaEnMilisegundos = fechaS.getTime() - fechaE.getTime();
    const diasReserva = Math.ceil(diferenciaEnMilisegundos / unDia);

    return diasReserva;
  }
}
