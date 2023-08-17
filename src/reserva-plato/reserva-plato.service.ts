import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ReservaPlato } from './reserva-plato.entity';
import { CreateReservaPlatoDTO, UpdateReservaPlatoDTO } from './dto/reserva-plato.dto';

@Injectable()
export class ReservaPlatoService {
  constructor(
    @InjectRepository(ReservaPlato)
    private reservaPlatoRepository: Repository<ReservaPlato>,
  ) {}

  async createReservaPlato(createReservaPlatoDto: CreateReservaPlatoDTO): Promise<ReservaPlato> {
    let reservaPlatoCreated=new ReservaPlato();
    reservaPlatoCreated.cantidad=createReservaPlatoDto.cantidad;
    reservaPlatoCreated.plato=<any>{id: createReservaPlatoDto.platoId};
    reservaPlatoCreated.reserva=<any>{id: createReservaPlatoDto.reservaId};
    return await this.reservaPlatoRepository.save(reservaPlatoCreated);
  }

  async updateReservaPlato(dto: UpdateReservaPlatoDTO): Promise<ReservaPlato> {
    const reservaPlatoToUpdate = await this.reservaPlatoRepository.preload(dto);
    if (!reservaPlatoToUpdate) {
      throw new Error(`La reservaPlato #${dto.id} no existe`);
    }
    return await this.reservaPlatoRepository.save(reservaPlatoToUpdate);
  }

  async findAll(): Promise<ReservaPlato[]> {
    return await this.reservaPlatoRepository.find(
        {
            relations:{
                plato:true,
                reserva:true
            }
        }
    );
  }

  async findByReservaId(reservaId:number): Promise<ReservaPlato[]> {
    return await this.reservaPlatoRepository.find(
        {
            where:{
                reserva:{
                    id:reservaId
                }
            },
            relations:{
                plato:true,
                reserva:true
            }
        }
    );
  }

  findOne(id: number): Promise<ReservaPlato> {
    return this.reservaPlatoRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.reservaPlatoRepository.delete(id);
  }
}
