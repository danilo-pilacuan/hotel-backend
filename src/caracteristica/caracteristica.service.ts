import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Caracteristica } from './caracteristica.entity';
import { CreateCaracteristicaDTO, UpdateCaracteristicaDTO } from './dto/caracteristica.dto';

@Injectable()
export class CaracteristicaService {
  constructor(
    @InjectRepository(Caracteristica)
    private caracteristicaRepository: Repository<Caracteristica>,
  ) {}

  async createCaracteristica(createCaracteristicaDTO: CreateCaracteristicaDTO): Promise<Caracteristica> {
    return await this.caracteristicaRepository.save(createCaracteristicaDTO);
  }

  async updateCaracteristica(updateCaracteristicaDTO: UpdateCaracteristicaDTO): Promise<Caracteristica> {
    return await this.caracteristicaRepository.save(updateCaracteristicaDTO);
  }

  findAll(): Promise<Caracteristica[]> {
    return this.caracteristicaRepository.find();
  }

  findOne(id: number): Promise<Caracteristica> {
    return this.caracteristicaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.caracteristicaRepository.delete(id);
  }
}
