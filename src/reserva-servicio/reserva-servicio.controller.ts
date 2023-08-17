import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ReservaServicioService } from './reserva-servicio.service';
import { CreateReservaServicioDTO, UpdateReservaServicioDTO } from './dto/reserva-servicio.dto';
import { ReservaServicio } from './reserva-servicio.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reservaServicios')
@Controller('reservaServicios')
export class ReservaServicioController {
  constructor(private readonly reservaServicioService: ReservaServicioService) {}

  @Post()
  create(@Body() createReservaServicioDto: CreateReservaServicioDTO): Promise<ReservaServicio> {
    
    return this.reservaServicioService.createReservaServicio(createReservaServicioDto);
  }

  @Get()
  async findAll(@Res() res): Promise<ReservaServicio[]> {
    
    const reservaServicios = await this.reservaServicioService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: reservaServicios });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReservaServicio> {
    return this.reservaServicioService.findOne(+id);
  }

  @Get('byReserva/:reservaId')
  async findByReservaId(@Param('reservaId') reservaId: number,@Res() res): Promise<ReservaServicio[]> {
    const reservaServicios = await this.reservaServicioService.findByReservaId(reservaId);
    console.log("reservaServicios")
    console.log(reservaServicios)
    return res.status(HttpStatus.OK).json({ resultado: reservaServicios });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReservaServicioDto: UpdateReservaServicioDTO): Promise<ReservaServicio> {
    updateReservaServicioDto.id = Number(id);
    return this.reservaServicioService.updateReservaServicio(updateReservaServicioDto);
  }

  @Delete(':id')
  
  async deleteReservaServicio(@Res() res,@Param('id') id: string) {
    const deletedReservaServicio = await this.reservaServicioService.remove(+id);
    if (deletedReservaServicio.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
