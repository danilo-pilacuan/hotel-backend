import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDTO, UpdateClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async createCliente(createClienteDTO: CreateClienteDTO) {
    const createdCliente = await this.clienteRepository.save(createClienteDTO);
    return createdCliente;
  }

  async updateCliente(updateClienteDTO: UpdateClienteDTO) {
    const updatedCliente = await this.clienteRepository.save(updateClienteDTO);
    return updatedCliente;
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find({
      relations:{
        reservas:true,
        usuario:true
      }
    });
  }

  findOne(cedula: string): Promise<Cliente | null> {
    return this.clienteRepository.findOneBy({cedula});
  }

  async remove(clienteCedula: string): Promise<DeleteResult> {
    const result = await this.clienteRepository.delete(clienteCedula);
    return result;
  }
}
