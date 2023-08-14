import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatoController } from './plato.controller';
import { PlatoService } from './plato.service';
import { Plato } from './plato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plato])],
  controllers: [PlatoController],
  providers: [PlatoService]
})
export class PlatoModule {}
