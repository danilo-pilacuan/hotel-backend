import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Res, 
  HttpStatus, 
  Body, 
  Param 
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO, UpdateUsuarioDTO } from './dto/usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async createUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO) {
    const createdUsuario = await this.usuarioService.createUsuario(createUsuarioDTO);
    return res.status(HttpStatus.OK).json({ createdUsuario });
  }

  @Get()
  async getUsuarios(@Res() res) {
    const usuarios = await this.usuarioService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: usuarios });
  }

  @Get(':id')
  async getUsuarioById(@Res() res, @Param('id') usuarioId: number) {
    const usuario = await this.usuarioService.findOne(usuarioId);
    if (usuario) {
      return res.status(HttpStatus.OK).json({ resultado: usuario });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Usuario not found' });
    }
  }

  @Get('byCorreo/:correo')
  async getUsuarioByCorreo(@Res() res, @Param('correo') correo: string) {
    const usuario = await this.usuarioService.findByEmail(correo);
    if (usuario) {
      return res.status(HttpStatus.OK).json({ resultado: usuario });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Usuario not found' });
    }
  }

  @Put()
  async updateUsuario(@Res() res, @Body() updateUsuarioDTO: UpdateUsuarioDTO) {
    const updatedUsuario = await this.usuarioService.updateUsuario(updateUsuarioDTO);
    return res.status(HttpStatus.OK).json({ updatedUsuario });
  }

  @Delete(':id')
  async deleteUsuario(@Res() res, @Param('id') usuarioId: number) {
    const deletedUsuario = await this.usuarioService.remove(usuarioId);
    if (deletedUsuario.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
