import { ApiProperty } from "@nestjs/swagger";

export class CreateTarifaDTO {
  @ApiProperty()
  descripcion: string;
  
  @ApiProperty()
  pax: number;

  @ApiProperty()
  valor: number;
}

export class UpdateTarifaDTO extends CreateTarifaDTO {
  @ApiProperty()
  id: number;
}
