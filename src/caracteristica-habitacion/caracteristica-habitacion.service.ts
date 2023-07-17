import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CaracteristicaHabitacion } from './caracteristica-habitacion.entity';
import { CreateCaracteristicaHabitacionDTO, UpdateCaracteristicaHabitacionDTO } from './dto/caracteristica-habitacion.dto';

@Injectable()
export class CaracteristicaHabitacionService {
  constructor(
    @InjectRepository(CaracteristicaHabitacion)
    private caracteristicaHabitacionRepository: Repository<CaracteristicaHabitacion>,
  ) {}

  async createCaracteristicaHabitacion(createCaracteristicaHabitacionDTO: CreateCaracteristicaHabitacionDTO): Promise<CaracteristicaHabitacion> {
    return await this.caracteristicaHabitacionRepository.save(createCaracteristicaHabitacionDTO);
  }

  async updateCaracteristicaHabitacion(updateCaracteristicaHabitacionDTO: UpdateCaracteristicaHabitacionDTO): Promise<CaracteristicaHabitacion> {
    return await this.caracteristicaHabitacionRepository.save(updateCaracteristicaHabitacionDTO);
  }

  findAll(): Promise<CaracteristicaHabitacion[]> {
    return this.caracteristicaHabitacionRepository.find();
  }

  findOne(id: number): Promise<CaracteristicaHabitacion> {
    return this.caracteristicaHabitacionRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.caracteristicaHabitacionRepository.delete(id);
  }
}
