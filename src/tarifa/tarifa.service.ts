import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Tarifa } from './tarifa.entity';
import { CreateTarifaDTO, UpdateTarifaDTO } from './dto/tarifa.dto';

@Injectable()
export class TarifaService {
  constructor(
    @InjectRepository(Tarifa)
    private tarifaRepository: Repository<Tarifa>,
  ) {}

  async createTarifa(dto: CreateTarifaDTO): Promise<Tarifa> {
    return await this.tarifaRepository.save(dto);
  }

  async updateTarifa(dto: UpdateTarifaDTO): Promise<Tarifa> {
    const tarifaToUpdate = await this.tarifaRepository.preload(dto);
    if (!tarifaToUpdate) {
      throw new Error(`La tarifa #${dto.id} no existe`);
    }
    return await this.tarifaRepository.save(tarifaToUpdate);
  }

  findAll(): Promise<Tarifa[]> {
    return this.tarifaRepository.find();
  }

  findOne(id: number): Promise<Tarifa> {
    return this.tarifaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.tarifaRepository.delete(id);
  }
}
