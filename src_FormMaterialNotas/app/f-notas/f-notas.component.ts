import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../alumno'; // Asegúrate de tener esta importación correctamente configurada

@Component({
  selector: 'app-f-notas',
  templateUrl: './f-notas.component.html',
  styleUrls: ['./f-notas.component.css'],
})
export class FNotasComponent implements OnInit {
  alumnos: Alumno[] = []; // Array para almacenar los datos de los alumnos
  miform!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miform = this.fb.group({
      cif: ['', [Validators.required, Validators.pattern('^(\\d{8})([A-Z])$')]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(25),
        ],
      ],
      n1: ['', [Validators.required, Validators.pattern('^10|[0-9]$')]],
      n2: ['', [Validators.required, Validators.pattern('^10|[0-9]$')]],
      n3: ['', [Validators.required, Validators.pattern('^10|[0-9]$')]],
    });
  }

  EnviarNotas() {
    if (this.miform.valid) {
      const alumno: Alumno = {
        cif: this.miform.value.cif,
        nombre: this.miform.value.nombre,
        n1: this.miform.value.n1,
        n2: this.miform.value.n2,
        n3: this.miform.value.n3,
      };
      this.alumnos.push(alumno);
      this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
      alert('Notas Enviadas');
    }
  }

  dataSource = new MatTableDataSource<Alumno>();
  columnas: string[] = ['cif', 'nombre', 'n1', 'n2', 'n3'];
}
