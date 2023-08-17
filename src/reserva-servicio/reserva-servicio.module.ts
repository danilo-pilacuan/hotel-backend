import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaServicio } from './reserva-servicio.entity';
import { ReservaServicioService } from './reserva-servicio.service';
import { ReservaServicioController } from './reserva-servicio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaServicio])],
  providers: [ReservaServicioService],
  controllers: [ReservaServicioController]
})
export class ReservaServicioModule {}
