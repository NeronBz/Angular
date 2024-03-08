import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  miform!: FormGroup;
  dataSource = new MatTableDataSource<any>();
  columnas: string[] = ['cif', 'nombre', 'n1', 'n2', 'n3'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miform = this.fb.group({
      cif: ['', [Validators.required, Validators.pattern('^\\d{8}[A-Z]$')]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ],
      ],
      n1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      n3: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    });
  }

  EnviarNotas() {
    if (this.miform.valid) {
      const alumno = {
        cif: this.miform.value.cif,
        nombre: this.miform.value.nombre,
        n1: this.miform.value.n1,
        n2: this.miform.value.n2,
        n3: this.miform.value.n3,
      };
      this.dataSource.data.push(alumno);
      this.dataSource._updateChangeSubscription();
      alert('Notas Enviadas');
    }
  }
}
