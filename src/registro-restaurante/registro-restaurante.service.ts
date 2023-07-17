import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { RegistroRestaurante } from './registro-restaurante.entity';
import { CreateRegistroRestauranteDTO, UpdateRegistroRestauranteDTO } from './dto/registro-restaurante.dto';

@Injectable()
export class RegistroRestauranteService {
  constructor(
    @InjectRepository(RegistroRestaurante)
    private registroRestauranteRepository: Repository<RegistroRestaurante>,
  ) {}

  async createRegistroRestaurante(createRegistroRestauranteDTO: CreateRegistroRestauranteDTO): Promise<RegistroRestaurante> {
    return await this.registroRestauranteRepository.save(createRegistroRestauranteDTO);
  }

  async updateRegistroRestaurante(updateRegistroRestauranteDTO: UpdateRegistroRestauranteDTO): Promise<RegistroRestaurante> {
    return await this.registroRestauranteRepository.save(updateRegistroRestauranteDTO);
  }

  findAll(): Promise<RegistroRestaurante[]> {
    return this.registroRestauranteRepository.find();
  }

  findOne(id: number): Promise<RegistroRestaurante> {
    return this.registroRestauranteRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.registroRestauranteRepository.delete(id);
  }

  

}
