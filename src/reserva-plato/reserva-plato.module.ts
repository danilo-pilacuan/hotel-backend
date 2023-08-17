import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaPlato } from './reserva-plato.entity';
import { ReservaPlatoService } from './reserva-plato.service';
import { ReservaPlatoController } from './reserva-plato.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaPlato])],
  providers: [ReservaPlatoService],
  controllers: [ReservaPlatoController]
})
export class ReservaPlatoModule {}
