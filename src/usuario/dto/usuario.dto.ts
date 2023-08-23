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

export class CreateUsuarioClienteDTO {
  
  @ApiProperty()
  correo: string;

  @ApiProperty()
  clave: string;

  @ApiProperty()
  activo: boolean;

  @ApiProperty()
  tipo: number;

  @ApiProperty()
  cedula: string;

  @ApiProperty()
  nombres: string;

  @ApiProperty()
  apellidos: string;

  @ApiProperty()
  direccion: string;
  
  @ApiProperty()
  telefono: string;
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
