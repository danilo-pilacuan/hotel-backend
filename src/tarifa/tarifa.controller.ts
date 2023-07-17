import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TarifaService } from './tarifa.service';
import { CreateTarifaDTO, UpdateTarifaDTO } from './dto/tarifa.dto';
import { Tarifa } from './tarifa.entity';

@Controller('tarifas')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  @Post()
  create(@Body() createTarifaDto: CreateTarifaDTO): Promise<Tarifa> {
    return this.tarifaService.createTarifa(createTarifaDto);
  }

  @Get()
  async findAll(@Res() res): Promise<Tarifa[]> {
    
    const tarifas = await this.tarifaService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: tarifas });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tarifa> {
    return this.tarifaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTarifaDto: UpdateTarifaDTO): Promise<Tarifa> {
    updateTarifaDto.id = Number(id);
    return this.tarifaService.updateTarifa(updateTarifaDto);
  }

  @Delete(':id')
  
  async deleteTarifa(@Res() res,@Param('id') id: string) {
    const deletedTarifa = await this.tarifaService.remove(+id);
    if (deletedTarifa.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
