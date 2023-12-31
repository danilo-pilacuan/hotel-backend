import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from './factura.entity';
import { CreateFacturaDto, UpdateFacturaDto } from './dto/factura.dto';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
  ) {}

  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    let factura = new Factura();
    factura.numero=createFacturaDto.numero;
    factura.fecha=createFacturaDto.fecha;
    factura.ruc=createFacturaDto.ruc;
    factura.razonSocial=createFacturaDto.razonSocial;
    factura.direccion=createFacturaDto.direccion;
    factura.telefono=createFacturaDto.telefono;
    factura.estado=createFacturaDto.estado;
    factura.reserva=<any>{id: createFacturaDto.reservaId};
    //factura.reserva=createFacturaDto.numero;

    //const factura = this.facturaRepository.create(createFacturaDto);
    return this.facturaRepository.save(factura);
  }

  async findAll(): Promise<Factura[]> {
    return this.facturaRepository.find();
  }

  async findOne(id: number): Promise<Factura | null> {
    return this.facturaRepository.findOneBy({id});
  }

  async update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura | null> {
    const factura = await this.findOne(id);
    if (!factura) return null;
    Object.assign(factura, updateFacturaDto);
    return this.facturaRepository.save(factura);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.facturaRepository.delete(id);
    return result.affected > 0;
  }
}
