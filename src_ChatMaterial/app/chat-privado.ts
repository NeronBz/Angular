export class ChatPrivado {
  id!: number;
  usuario!: string;
  destinatario!: string;
  mensaje!: string;
  fecha!: string;
  activo!: number;
  constructor(
    id: number,
    usuario: string,
    destinatario: string,
    mensaje: string,
    fecha: string,
    activo: number
  ) {}
}
