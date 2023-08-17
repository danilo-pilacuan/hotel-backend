import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ReservaServicio } from './reserva-servicio.entity';
import { CreateReservaServicioDTO, UpdateReservaServicioDTO } from './dto/reserva-servicio.dto';

@Injectable()
export class ReservaServicioService {
  constructor(
    @InjectRepository(ReservaServicio)
    private reservaServicioRepository: Repository<ReservaServicio>,
  ) {}

  async createReservaServicio(createReservaServicioDto: CreateReservaServicioDTO): Promise<ReservaServicio> {
    let reservaServicioCreated=new ReservaServicio();
    reservaServicioCreated.servicio=<any>{id: createReservaServicioDto.servicioId};
    reservaServicioCreated.reserva=<any>{id: createReservaServicioDto.reservaId};
    return await this.reservaServicioRepository.save(reservaServicioCreated);
  }

  async updateReservaServicio(dto: UpdateReservaServicioDTO): Promise<ReservaServicio> {
    const reservaServicioToUpdate = await this.reservaServicioRepository.preload(dto);
    if (!reservaServicioToUpdate) {
      throw new Error(`La reservaServicio #${dto.id} no existe`);
    }
    return await this.reservaServicioRepository.save(reservaServicioToUpdate);
  }

  async findAll(): Promise<ReservaServicio[]> {
    return await this.reservaServicioRepository.find(
        {
            relations:{
                servicio:true,
                reserva:true
            }
        }
    );
  }

  async findByReservaId(reservaId:number): Promise<ReservaServicio[]> {
    return await this.reservaServicioRepository.find(
        {
            where:{
                reserva:{
                    id:reservaId
                }
            },
            relations:{
                servicio:true,
                reserva:true
            }
        }
    );
  }

  findOne(id: number): Promise<ReservaServicio> {
    return this.reservaServicioRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.reservaServicioRepository.delete(id);
  }
}
