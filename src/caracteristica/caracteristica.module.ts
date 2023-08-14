import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaracteristicaController } from './caracteristica.controller';
import { CaracteristicaService } from './caracteristica.service';
import { Caracteristica } from './caracteristica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Caracteristica])],
  controllers: [CaracteristicaController],
  providers: [CaracteristicaService]
})
export class CaracteristicaModule {}
