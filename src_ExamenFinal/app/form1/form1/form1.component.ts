import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/empleado';
import { ServicioEmpleadoService } from 'src/app/servicio-empleado.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit {
  empList: Empleado[] = [];
  miform!: FormGroup;
  formValido: boolean = false;
  idOptions: number[] = [];
  edadOptions: number[] = [];

  constructor(
    private fb: FormBuilder,
    private servicio: ServicioEmpleadoService
  ) {}

  ngOnInit(): void {
    for (let i = 1; i <= 300; i++) {
      this.idOptions.push(i);
    }

    for (let i = 18; i <= 65; i++) {
      this.edadOptions.push(i);
    }

    this.miform = this.fb.group({
      id: ['', [Validators.required, Validators.min(1), Validators.max(300)]],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      imagen: ['', [Validators.required]],
    });

    this.miform.statusChanges.subscribe(() => {
      this.formValido = this.miform.valid;
    });

    this.servicio.obtenerEmpleado().subscribe((empleados: Empleado[]) => {
      this.empList = empleados;
    });
  }

  cargarEmpleados() {
    if (this.miform.valid) {
      const empleado: Empleado = {
        id: this.miform.value.id,
        nombre: this.miform.value.nombre,
        direccion: this.miform.value.direccion,
        cargo: this.miform.value.cargo,
        edad: this.miform.value.edad,
        imagen: this.miform.value.imagen,
      };

      this.servicio.insertarEmpleado(empleado).subscribe((response) => {
        console.log('Empleado insertado correctamente:', response);
      });
    }
  }
}
