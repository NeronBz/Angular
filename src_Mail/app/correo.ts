export class Correo {
  id!: number;
  origen!: string;
  destinatario!: string;
  asunto!: string;
  mensaje!: string;
  fecha!: string;
  leido!: number;

  constructor(
    id: number,
    origen: string,
    destinatario: string,
    asunto: string,
    mensaje: string,
    fecha: string,
    leido: number
  ) {}
}
