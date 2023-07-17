import { ApiProperty } from '@nestjs/swagger';

export class CreateServicioDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;

  @ApiProperty()
  precio: number;
}

export class UpdateServicioDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;

  @ApiProperty()
  precio: number;
}
