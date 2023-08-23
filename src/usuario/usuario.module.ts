import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { Cliente } from 'src/cliente/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario,Cliente])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
