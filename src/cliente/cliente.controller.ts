import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDTO, UpdateClienteDTO } from './dto/cliente.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cliente')
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

//   @Post()
//   async createCliente(@Res() res, @Body() createClienteDTO: CreateClienteDTO) {
//     const createdCliente = await this.clienteService.createCliente(createClienteDTO);
//     return res.status(HttpStatus.OK).json({ createdCliente });
//   }

  @Get()
  async getClientes(@Res() res) {
    const clientes = await this.clienteService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: clientes });
  }

//   @Get(':id')
//   async getClienteById(@Res() res, @Param('id') clienteId: number) {
//     const cliente = await this.clienteService.findOne(clienteId);
//     if (cliente) {
//       return res.status(HttpStatus.OK).json({ resultado: cliente });
//     } else {
//       return res.status(HttpStatus.NOT_FOUND).json({ error: 'Cliente not found' });
//     }
//   }

//   @Put()
//   async updateCliente(@Res() res, @Body() updateClienteDTO: UpdateClienteDTO) {
//     const updatedCliente = await this.clienteService.updateCliente(updateClienteDTO);
//     return res.status(HttpStatus.OK).json({ updatedCliente });
//   }

//   @Delete(':id')
//   async deleteCliente(@Res() res, @Param('id') clienteId: number) {
//     const deletedCliente = await this.clienteService.remove(clienteId);
//     if (deletedCliente.affected > 0) {
//       return res.status(HttpStatus.OK).json({ ok: 'ok' });
//     } else {
//       return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
//     }
//   }
}
