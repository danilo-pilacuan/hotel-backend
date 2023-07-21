import { ApiProperty } from "@nestjs/swagger";

export class CreateFacturaDto {
  @ApiProperty()
    numero: string;
    @ApiProperty()
    fecha: string;
    @ApiProperty()
    ruc: string;
    @ApiProperty()
    razonSocial: string;
    @ApiProperty()
    direccion: string;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    estado: string;
    @ApiProperty()
    reservaId: number;
  }
  
  export class UpdateFacturaDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    numero: string;
    @ApiProperty()
    fecha: string;
    @ApiProperty()
    ruc: string;
    @ApiProperty()
    razonSocial: string;
    @ApiProperty()
    direccion: string;
    @ApiProperty()
    telefono: string;
    @ApiProperty()
    estado: string;
    @ApiProperty()
    
    reservaId: number;
  }
  