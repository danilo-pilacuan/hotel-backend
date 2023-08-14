import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDTO {

    @ApiProperty()
    cedula: string;

    @ApiProperty()
    nombres: string;

    @ApiProperty()
    apellidos: string;

    @ApiProperty()
    correo: string;

    @ApiProperty()
    direccion: string;

    @ApiProperty()
    telefono: string;

}

export class UpdateClienteDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    cedula: string;

    @ApiProperty()
    nombres: string;

    @ApiProperty()
    apellidos: string;

    @ApiProperty()
    correo: string;

    @ApiProperty()
    direccion: string;

    @ApiProperty()
    telefono: string;

}