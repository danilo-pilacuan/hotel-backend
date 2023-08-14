import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDTO, LoginUsuarioDTO, UpdateUsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async createUsuario(createUsuarioDTO: CreateUsuarioDTO) {
    const createdUsuario = await this.usuariosRepository.save(createUsuarioDTO);
    return createdUsuario;
  }

  async updateUsuario(updateUsuarioDTO: UpdateUsuarioDTO) {
    const updatedUsuario = await this.usuariosRepository.save(updateUsuarioDTO);
    return updatedUsuario;
  }

  async loginUsuario(loginUsuarioDTO: LoginUsuarioDTO) {
    //const updatedUsuario = await this.usuariosRepository.save(updateUsuarioDTO);
    //return updatedUsuario;
    console.log("loooooooooo")

    return await this.usuariosRepository.findOne({
      where:{
        correo:loginUsuarioDTO.correo
      }
    });

  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find({
      relations:{
        //reservas:true
      }
    });
  }

  findOne(id: number): Promise<Usuario | null> {
    return this.usuariosRepository.findOneBy({id});
  }

  findByEmail(correo: string): Promise<Usuario | null> {
    return this.usuariosRepository.findOne({
      where:{
        correo
      }
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    const result = await this.usuariosRepository.delete(id);
    return result;
  }
}
