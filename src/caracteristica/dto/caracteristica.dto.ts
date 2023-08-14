import { ApiProperty } from '@nestjs/swagger';

export class CreateCaracteristicaDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;
}

export class UpdateCaracteristicaDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;
}
