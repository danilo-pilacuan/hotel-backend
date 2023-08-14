import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaPlato } from './reserva-plato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaPlato])]
})
export class ReservaPlatoModule {}
