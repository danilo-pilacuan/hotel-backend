import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDTO {
  @ApiProperty()
  fechaCreacion: string;

  @ApiProperty()
  fechaLlegada: string;

  @ApiProperty()
  fechaSalida: string;

  @ApiProperty()
  horaLlegada: string;

  @ApiProperty()
  horaSalida: string;

  @ApiProperty()
  estado: number;

  @ApiProperty()
  numeroPersonas: number;

  @ApiProperty()
  detalles: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  habitacionId: number;

  @ApiProperty()
  fotoComprobante: string;

}

export class UpdateReservaDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fechaCreacion: string;

  @ApiProperty()
  fechaLlegada: string;

  @ApiProperty()
  fechaSalida: string;

  @ApiProperty()
  horaLlegada: string;

  @ApiProperty()
  horaSalida: string;

  @ApiProperty()
  estado: number;

  @ApiProperty()
  numeroPersonas: number;

  @ApiProperty()
  detalles: string;

  @ApiProperty()
  total: number;
  
  @ApiProperty()
  habitacionId: number;

  @ApiProperty()
  fotoComprobante: string;
}
