import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDTO {
  @ApiProperty()
  fechaCreacion: Date;

  @ApiProperty()
  fechaLlegada: Date;

  @ApiProperty()
  fechaSalida: Date;

  // @ApiProperty()
  // horaLlegada: string;

  // @ApiProperty()
  // horaSalida: string;

  @ApiProperty()
  estado: number;

  @ApiProperty()
  detalles: string;

  // @ApiProperty()
  // total: number;

  @ApiProperty()
  habitacionId: number;
  
  @ApiProperty()
  clienteCedula: string;

  @ApiProperty()
  urlFotoComprobante: string;

}

export class UpdateReservaDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fechaCreacion: Date;

  @ApiProperty()
  fechaLlegada: Date;

  @ApiProperty()
  fechaSalida: Date;

  // @ApiProperty()
  // horaLlegada: string;

  // @ApiProperty()
  // horaSalida: string;

  @ApiProperty()
  estado: number;

  @ApiProperty()
  detalles: string;

  // @ApiProperty()
  // total: number;
  
  @ApiProperty()
  habitacionId: number;

  @ApiProperty()
  clienteCedula: string;

  @ApiProperty()
  urlFotoComprobante: string;
}
