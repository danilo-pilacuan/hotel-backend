import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitacionDTO {
  @ApiProperty()
  numero: string;

  @ApiProperty()
  piso: string;

  @ApiProperty()
  estado: number;

  
  @ApiProperty()
  tarifaId: number;
}

export class UpdateHabitacionDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  numero: string;

  @ApiProperty()
  piso: string;
  
  @ApiProperty()
  estado: number;

  @ApiProperty()
  tarifaId: number;
}
