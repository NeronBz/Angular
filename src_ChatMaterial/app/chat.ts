export class Chat {
  id!: number;
  usuario!: string;
  mensaje!: string;
  fecha!: string;
  activo!: number;
  constructor(
    id: number,
    usuario: string,
    mensaje: string,
    fecha: string,
    activo: number
  ) {}
}
