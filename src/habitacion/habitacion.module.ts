import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitacionController } from './habitacion.controller';
import { HabitacionService } from './habitacion.service';
import { Habitacion } from './habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habitacion])],
  controllers: [HabitacionController],
  providers: [HabitacionService]
})
export class HabitacionModule {}
