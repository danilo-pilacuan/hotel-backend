import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Reserva } from './reserva.entity';
import { CreateReservaDTO, UpdateReservaDTO } from './dto/reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  async createReserva(createReservaDTO: CreateReservaDTO): Promise<Reserva> {
    return await this.reservaRepository.save(createReservaDTO);
  }

  async updateReserva(updateReservaDTO: UpdateReservaDTO): Promise<Reserva> {
    return await this.reservaRepository.save(updateReservaDTO);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find();
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.reservaRepository.delete(id);
  }
}
