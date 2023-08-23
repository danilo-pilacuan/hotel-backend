import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDTO, LoginUsuarioDTO, UpdateUsuarioDTO,CreateUsuarioClienteDTO } from './dto/usuario.dto';
import { Cliente } from 'src/cliente/cliente.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  async createUsuario(createUsuarioDTO: CreateUsuarioDTO) {
    const createdUsuario = await this.usuariosRepository.save(createUsuarioDTO);
    return createdUsuario;
  }

  async createUsuarioCliente(createUsuarioClienteDTO: CreateUsuarioClienteDTO) {
    // const createdUsuario = await this.usuariosRepository.save(createUsuarioDTO);
    // return createdUsuario;
    const createdCliente = new Cliente();
    createdCliente.cedula=createUsuarioClienteDTO.cedula;
    createdCliente.nombres=createUsuarioClienteDTO.nombres;
    createdCliente.apellidos=createUsuarioClienteDTO.apellidos;
    createdCliente.direccion=createUsuarioClienteDTO.direccion;
    createdCliente.correo=createUsuarioClienteDTO.correo;
    createdCliente.telefono=createUsuarioClienteDTO.telefono;
    const savedCliente = await this.clientesRepository.save(createdCliente);
    const createdUsuario = new Usuario();
    createdUsuario.nombre=savedCliente.nombres+" "+savedCliente.apellidos;
    createdUsuario.correo=savedCliente.correo;
    createdUsuario.clave=createUsuarioClienteDTO.clave;
    createdUsuario.activo=createUsuarioClienteDTO.activo;
    createdUsuario.tipo=3;
    createdUsuario.cliente=<any>{cedula: savedCliente.cedula};

    return await this.usuariosRepository.save(createdUsuario);;
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
        correo:loginUsuarioDTO.correo,
        clave:loginUsuarioDTO.clave
      },
      relations:{
        cliente: true
      }
    });

  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find({
      relations:{
        cliente:true
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
