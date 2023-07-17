import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioController } from './servicio.controller';
import { ServicioService } from './servicio.service';
import { Servicio } from './servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  controllers: [ServicioController],
  providers: [ServicioService]
})
export class ServicioModule {}
