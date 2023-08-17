import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaPlatoDTO {
  
  @ApiProperty()
  cantidad:number;
  
  @ApiProperty()
  reservaId:number;
  
  @ApiProperty()
  platoId:number;

  
}

export class UpdateReservaPlatoDTO {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    cantidad:number;
    
    @ApiProperty()
    reservaId:number;
    
    @ApiProperty()
    platoId:number;
      
  }