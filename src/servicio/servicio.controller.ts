import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDTO, UpdateServicioDTO } from './dto/servicio.dto';

@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Post()
  async createServicio(@Res() res, @Body() createServicioDTO: CreateServicioDTO) {
    const createdServicio = await this.servicioService.createServicio(createServicioDTO);
    return res.status(HttpStatus.OK).json({ createdServicio });
  }

  @Get()
  async getServicios(@Res() res) {
    const servicios = await this.servicioService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: servicios });
  }

  @Get(':id')
  async getServicioById(@Res() res, @Param('id') servicioId: number) {
    const servicio = await this.servicioService.findOne(servicioId);
    if (servicio) {
      return res.status(HttpStatus.OK).json({ resultado: servicio });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Servicio not found' });
    }
  }

  @Put()
  async updateServicio(@Res() res, @Body() updateServicioDTO: UpdateServicioDTO) {
    const updatedServicio = await this.servicioService.updateServicio(updateServicioDTO);
    return res.status(HttpStatus.OK).json({ updatedServicio });
  }

  @Delete(':id')
  async deleteServicio(@Res() res, @Param('id') servicioId: number) {
    const deletedServicio = await this.servicioService.remove(servicioId);
    if (deletedServicio.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Servicio not found' });
    }
  }
}
