import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { RegistroRestauranteService } from './registro-restaurante.service';
import { CreateRegistroRestauranteDTO, UpdateRegistroRestauranteDTO } from './dto/registro-restaurante.dto';

@Controller('registro-restaurante')
export class RegistroRestauranteController {
  constructor(private readonly registroRestauranteService: RegistroRestauranteService) {}

  @Post()
  async createRegistroRestaurante(@Res() res, @Body() createRegistroRestauranteDTO: CreateRegistroRestauranteDTO) {
    const createdRegistroRestaurante = await this.registroRestauranteService.createRegistroRestaurante(createRegistroRestauranteDTO);
    return res.status(HttpStatus.OK).json({ createdRegistroRestaurante });
  }

  @Get()
  async getRegistroRestaurantes(@Res() res) {
    const registroRestaurantes = await this.registroRestauranteService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: registroRestaurantes });
  }

  @Get(':id')
  async getRegistroRestauranteById(@Res() res, @Param('id') registroRestauranteId: number) {
    const registroRestaurante = await this.registroRestauranteService.findOne(registroRestauranteId);
    if (registroRestaurante) {
      return res.status(HttpStatus.OK).json({ resultado: registroRestaurante });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'RegistroRestaurante not found' });
    }
  }

  @Put()
  async updateRegistroRestaurante(@Res() res, @Body() updateRegistroRestauranteDTO: UpdateRegistroRestauranteDTO) {
    const updatedRegistroRestaurante = await this.registroRestauranteService.updateRegistroRestaurante(updateRegistroRestauranteDTO);
    return res.status(HttpStatus.OK).json({ updatedRegistroRestaurante });
  }

  @Delete(':id')
  async deleteRegistroRestaurante(@Res() res, @Param('id') registroRestauranteId: number) {
    const deletedRegistroRestaurante = await this.registroRestauranteService.remove(registroRestauranteId);
    if (deletedRegistroRestaurante.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
