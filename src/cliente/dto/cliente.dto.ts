import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDTO {

    @ApiProperty()
    cedula: string;

    @ApiProperty()
    nombres: string;

    @ApiProperty()
    apellidos: string;

    @ApiProperty()
    direccion: string;
    
    @ApiProperty()
    correo: string;

    @ApiProperty()
    telefono: string;

}

export class UpdateClienteDTO {
    @ApiProperty()
    cedula: string;

    @ApiProperty()
    nombres: string;

    @ApiProperty()
    apellidos: string;

    @ApiProperty()
    direccion: string;

    @ApiProperty()
    correo: string;

    @ApiProperty()
    telefono: string;

}