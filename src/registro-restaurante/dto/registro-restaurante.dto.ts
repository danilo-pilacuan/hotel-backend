import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroRestauranteDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  urlFoto: string;
}

export class UpdateRegistroRestauranteDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  urlFoto: string;
}
