import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CaracteristicaHabitacionService } from './caracteristica-habitacion.service';
import { CreateCaracteristicaHabitacionDTO, UpdateCaracteristicaHabitacionDTO } from './dto/caracteristica-habitacion.dto';

@Controller('caracteristicas-habitaciones')
export class CaracteristicaHabitacionController {
  constructor(private readonly caracteristicaHabitacionService: CaracteristicaHabitacionService) {}

  @Post()
  async createCaracteristicaHabitacion(@Res() res, @Body() createCaracteristicaHabitacionDTO: CreateCaracteristicaHabitacionDTO) {
    const createdCaracteristicaHabitacion = await this.caracteristicaHabitacionService.createCaracteristicaHabitacion(createCaracteristicaHabitacionDTO);
    return res.status(HttpStatus.OK).json({ createdCaracteristicaHabitacion });
  }

  @Get()
  async getCaracteristicasHabitaciones(@Res() res) {
    const caracteristicasHabitaciones = await this.caracteristicaHabitacionService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: caracteristicasHabitaciones });
  }

  @Get(':id')
  async getCaracteristicaHabitacionById(@Res() res, @Param('id') caracteristicaHabitacionId: number) {
    const caracteristicaHabitacion = await this.caracteristicaHabitacionService.findOne(caracteristicaHabitacionId);
    if (caracteristicaHabitacion) {
      return res.status(HttpStatus.OK).json({ resultado: caracteristicaHabitacion });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'CaracteristicaHabitacion not found' });
    }
  }

  @Put()
  async updateCaracteristicaHabitacion(@Res() res, @Body() updateCaracteristicaHabitacionDTO: UpdateCaracteristicaHabitacionDTO) {
    const updatedCaracteristicaHabitacion = await this.caracteristicaHabitacionService.updateCaracteristicaHabitacion(updateCaracteristicaHabitacionDTO);
    return res.status(HttpStatus.OK).json({ updatedCaracteristicaHabitacion });
  }

  @Delete(':id')
  async deleteCaracteristicaHabitacion(@Res() res, @Param('id') caracteristicaHabitacionId: number) {
    const deletedCaracteristicaHabitacion = await this.caracteristicaHabitacionService.remove(caracteristicaHabitacionId);
    if (deletedCaracteristicaHabitacion.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
