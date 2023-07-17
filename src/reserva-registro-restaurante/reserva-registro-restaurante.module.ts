import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaRegistroRestaurante } from './reserva-registro-restaurante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaRegistroRestaurante])]
})
export class ReservaRegistroRestauranteModule {}
