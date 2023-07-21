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
    let reserva = new Reserva();
    reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reserva.fechaLlegada=createReservaDTO.fechaLlegada;
    reserva.fechaSalida=createReservaDTO.fechaSalida;
    reserva.horaLlegada=createReservaDTO.horaLlegada;
    reserva.horaSalida=createReservaDTO.horaSalida;
    reserva.estado=createReservaDTO.estado;
    reserva.numeroPersonas=createReservaDTO.numeroPersonas;
    reserva.detalles=createReservaDTO.detalles;
    reserva.total=createReservaDTO.total;
    reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reserva.habitacion=<any>{id: createReservaDTO.habitacionId};

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
