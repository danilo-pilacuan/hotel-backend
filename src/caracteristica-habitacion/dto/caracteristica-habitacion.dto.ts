import { ApiProperty } from '@nestjs/swagger';

export class CreateCaracteristicaHabitacionDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;
}

export class UpdateCaracteristicaHabitacionDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  tipo: string;
}
