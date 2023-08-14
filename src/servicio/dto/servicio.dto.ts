import { ApiProperty } from '@nestjs/swagger';

export class CreateServicioDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: number;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  urlFotoNormal: string;
  
  @ApiProperty()
  urlFoto360: string;
}

export class UpdateServicioDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: number;

  @ApiProperty()
  precio: number;
  
  @ApiProperty()
  urlFotoNormal: string;
  
  @ApiProperty()
  urlFoto360: string;
}
