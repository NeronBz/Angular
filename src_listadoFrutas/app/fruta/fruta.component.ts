import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css'],
})
export class FrutaComponent {
  actualizarProducto() {
    this.httpCliente
      .updateProduct(this.selectedProduct)
      .subscribe((producto: Fruta) => (this.prod = producto));
  }
  eliminar(id: string) {
    this.httpCliente
      .deleteProduct(id)
      .subscribe((producto: Fruta) => (this.prod = producto));
  }
  seleccionar(f: Fruta) {
    this.selectedProduct = f;
  }
  frutas!: Fruta[];

  constructor(private httpCliente: ServicioFService) {
    this.httpCliente.leerProductos().subscribe((x) => (this.frutas = x));
  }

  prod!: Fruta;

  selectedProduct: Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: '',
  };

  crearProducto(form: { value: Fruta }) {
    this.httpCliente.createProduct(form.value).subscribe((producto: Fruta) => {
      this.prod = producto;
    });
  }
}
