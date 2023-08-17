import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ReservaPlatoService } from './reserva-plato.service';
import { CreateReservaPlatoDTO, UpdateReservaPlatoDTO } from './dto/reserva-plato.dto';
import { ReservaPlato } from './reserva-plato.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reservaPlatos')
@Controller('reservaPlatos')
export class ReservaPlatoController {
  constructor(private readonly reservaPlatoService: ReservaPlatoService) {}

  @Post()
  create(@Body() createReservaPlatoDto: CreateReservaPlatoDTO): Promise<ReservaPlato> {
    
    return this.reservaPlatoService.createReservaPlato(createReservaPlatoDto);
  }

  @Get()
  async findAll(@Res() res): Promise<ReservaPlato[]> {
    
    const reservaPlatos = await this.reservaPlatoService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: reservaPlatos });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReservaPlato> {
    return this.reservaPlatoService.findOne(+id);
  }

  @Get('byReserva/:reservaId')
  async findByReservaId(@Param('reservaId') reservaId: number,@Res() res): Promise<ReservaPlato[]> {
    const reservaPlatos = await this.reservaPlatoService.findByReservaId(reservaId);
    console.log("reservaPlatos")
    console.log(reservaPlatos)
    return res.status(HttpStatus.OK).json({ resultado: reservaPlatos });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReservaPlatoDto: UpdateReservaPlatoDTO): Promise<ReservaPlato> {
    updateReservaPlatoDto.id = Number(id);
    return this.reservaPlatoService.updateReservaPlato(updateReservaPlatoDto);
  }

  @Delete(':id')
  
  async deleteReservaPlato(@Res() res,@Param('id') id: string) {
    const deletedReservaPlato = await this.reservaPlatoService.remove(+id);
    if (deletedReservaPlato.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
