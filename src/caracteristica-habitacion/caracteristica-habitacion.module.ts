import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicaHabitacionController } from './caracteristica-habitacion.controller';
import { CaracteristicaHabitacionService } from './caracteristica-habitacion.service';
import { CaracteristicaHabitacion } from './caracteristica-habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaracteristicaHabitacion])],
  controllers: [CaracteristicaHabitacionController],
  providers: [CaracteristicaHabitacionService]
})
export class CaracteristicaHabitacionModule {}
