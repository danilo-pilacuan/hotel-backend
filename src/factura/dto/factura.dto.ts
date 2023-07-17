export class CreateFacturaDto {
    numero: string;
    fecha: string;
    ruc: string;
    razonSocial: string;
    direccion: string;
    telefono: string;
    estado: string;
  }
  
  export class UpdateFacturaDto {
    id: number;
    numero: string;
    fecha: string;
    ruc: string;
    razonSocial: string;
    direccion: string;
    telefono: string;
    estado: string;
  }
  