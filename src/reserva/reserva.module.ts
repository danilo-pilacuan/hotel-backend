import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.entity';
import { EmailService } from './email.service';
import { HabitacionService } from 'src/habitacion/habitacion.service';
import { Habitacion } from 'src/habitacion/habitacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva,Habitacion])],
  controllers: [ReservaController],
  providers: [ReservaService,EmailService,HabitacionService]
})
export class ReservaModule {}
