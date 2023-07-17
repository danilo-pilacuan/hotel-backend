import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';
import { Reserva } from './reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva])],
  controllers: [ReservaController],
  providers: [ReservaService]
})
export class ReservaModule {}
