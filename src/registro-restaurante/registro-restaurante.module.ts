import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroRestauranteController } from './registro-restaurante.controller';
import { RegistroRestauranteService } from './registro-restaurante.service';
import { RegistroRestaurante } from './registro-restaurante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroRestaurante])],
  controllers: [RegistroRestauranteController],
  providers: [RegistroRestauranteService]
})
export class RegistroRestauranteModule {}
