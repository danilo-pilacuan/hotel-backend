import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDTO, UpdateReservaDTO } from './dto/reserva.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/helperReserva';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post()
  async createReserva(@Res() res, @Body() createReservaDTO: CreateReservaDTO) {
    const createdReserva = await this.reservaService.createReserva(createReservaDTO);
    return res.status(HttpStatus.OK).json({ createdReserva });
  }

  @Post('uploadReserva')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'fotoComprobanteFile', maxCount: 1 },
  ],
  {
    storage: diskStorage({
      destination: Helper.destinationPath,
      filename: Helper.customFileName,
    }),
  },))
  async uploadFiles(@Res() res,@Body() createReservaDTO: CreateReservaDTO,@UploadedFiles() files: { fotoComprobanteFile?: Express.Multer.File[] }) {
    console.log(files);
    console.log(createReservaDTO);
    const createdReserva = await this.reservaService.createReservaImg(createReservaDTO,'images/reservas/'+files.fotoComprobanteFile[0].filename);
    return res.status(HttpStatus.OK).json({ createdReserva });
    //return res.status(HttpStatus.OK).json({ "ok":"ok" });
  }

  @Get()
  async getReservas(@Res() res) {
    const reservas = await this.reservaService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: reservas });
  }

  @Get(':id')
  async getReservaById(@Res() res, @Param('id') reservaId: number) {
    const reserva = await this.reservaService.findOne(reservaId);
    if (reserva) {
      return res.status(HttpStatus.OK).json({ resultado: reserva });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Reserva not found' });
    }
  }

  @Put()
  async updateReserva(@Res() res, @Body() updateReservaDTO: UpdateReservaDTO) {
    const updatedReserva = await this.reservaService.updateReserva(updateReservaDTO);
    return res.status(HttpStatus.OK).json({ updatedReserva });
  }

  @Delete(':id')
  async deleteReserva(@Res() res, @Param('id') reservaId: number) {
    const deletedReserva = await this.reservaService.remove(reservaId);
    if (deletedReserva.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Reserva not found' });
    }
  }
}
