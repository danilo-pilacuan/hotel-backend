import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { Factura } from './factura.entity';
import { CreateFacturaDto, UpdateFacturaDto } from './dto/factura.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('facturas')
@Controller('facturas')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @Post()
  create(@Body() createFacturaDto: CreateFacturaDto): Promise<Factura> {
    return this.facturaService.create(createFacturaDto);
  }

  @Get()
  findAll(): Promise<Factura[]> {
    return this.facturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Factura | null> {
    return this.facturaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateFacturaDto: UpdateFacturaDto): Promise<Factura | null> {
    return this.facturaService.update(id, updateFacturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.facturaService.remove(id);
  }
}
