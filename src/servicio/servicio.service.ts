import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Servicio } from './servicio.entity';
import { CreateServicioDTO, UpdateServicioDTO } from './dto/servicio.dto';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
  ) {}

  async createServicio(createServicioDTO: CreateServicioDTO): Promise<Servicio> {
    return await this.servicioRepository.save(createServicioDTO);
  }

  async updateServicio(updateServicioDTO: UpdateServicioDTO): Promise<Servicio> {
    return await this.servicioRepository.save(updateServicioDTO);
  }

  findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find();
  }

  findOne(id: number): Promise<Servicio> {
    return this.servicioRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.servicioRepository.delete(id);
  }
}
