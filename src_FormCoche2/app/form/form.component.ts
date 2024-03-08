import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  miformulario!: FormGroup;
  ngOnInit(): void {
    this.miformulario = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      apellidos: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      fecNac: ['', [Validators.required]],
      credito: ['', [Validators.required, Validators.pattern('^[0-9]{25}$')]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*W).{10,}$'),
        ],
      ],
    });
  }
  get nombre() {
    return this.miformulario.get('nombre');
  }
  get apellidos() {
    return this.miformulario.get('apellidos');
  }
  get fecNac() {
    return this.miformulario.get('fecNac');
  }
  get credito() {
    return this.miformulario.get('credito');
  }
  get pwd() {
    return this.miformulario.get('pwd');
  }
  EnviarDatos() {
    if (this.miformulario.valid) {
      alert('Todo Correcto');
    }
  }
}
