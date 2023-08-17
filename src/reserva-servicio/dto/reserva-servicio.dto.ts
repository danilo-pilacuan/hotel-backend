import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaServicioDTO {
  
  @ApiProperty()
  reservaId:number;
  
  @ApiProperty()
  servicioId:number;

  
}

export class UpdateReservaServicioDTO {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    reservaId:number;
    
    @ApiProperty()
    servicioId:number;
      
  }