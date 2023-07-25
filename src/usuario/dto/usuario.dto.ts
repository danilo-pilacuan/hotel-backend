import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDTO {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  correo: string;

  @ApiProperty()
  clave: string;

  @ApiProperty()
  activo: boolean;

  @ApiProperty()
  tipo: number;
}

export class UpdateUsuarioDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  correo: string;

  @ApiProperty()
  clave: string;

  @ApiProperty()
  activo: boolean;

  @ApiProperty()
  tipo: number;
}


export class LoginUsuarioDTO {

  @ApiProperty()
  correo: string;

  @ApiProperty()
  clave: string;
}
