import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CaracteristicaService } from './caracteristica.service';
import { CreateCaracteristicaDTO, UpdateCaracteristicaDTO } from './dto/caracteristica.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('caracteristicas-habitaciones')
@Controller('caracteristicas-habitaciones')
export class CaracteristicaController {
  constructor(private readonly caracteristicaService: CaracteristicaService) {}

  @Post()
  async createCaracteristica(@Res() res, @Body() createCaracteristicaDTO: CreateCaracteristicaDTO) {
    const createdCaracteristica = await this.caracteristicaService.createCaracteristica(createCaracteristicaDTO);
    return res.status(HttpStatus.OK).json({ createdCaracteristica });
  }

  @Get()
  async getCaracteristicasHabitaciones(@Res() res) {
    const caracteristicasHabitaciones = await this.caracteristicaService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: caracteristicasHabitaciones });
  }

  @Get(':id')
  async getCaracteristicaById(@Res() res, @Param('id') caracteristicaId: number) {
    const caracteristica = await this.caracteristicaService.findOne(caracteristicaId);
    if (caracteristica) {
      return res.status(HttpStatus.OK).json({ resultado: caracteristica });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Caracteristica not found' });
    }
  }

  @Put()
  async updateCaracteristica(@Res() res, @Body() updateCaracteristicaDTO: UpdateCaracteristicaDTO) {
    const updatedCaracteristica = await this.caracteristicaService.updateCaracteristica(updateCaracteristicaDTO);
    return res.status(HttpStatus.OK).json({ updatedCaracteristica });
  }

  @Delete(':id')
  async deleteCaracteristica(@Res() res, @Param('id') caracteristicaId: number) {
    const deletedCaracteristica = await this.caracteristicaService.remove(caracteristicaId);
    if (deletedCaracteristica.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
