import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { CreateHabitacionDTO, UpdateHabitacionDTO } from './dto/habitacion.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller('habitaciones')
export class HabitacionController {
  constructor(private readonly habitacionService: HabitacionService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post('uploadImages')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'fotoNormal', maxCount: 1 },
    { name: 'foto360', maxCount: 1 },
  ]))
  uploadFiles(@Body() createHabitacionDTO: CreateHabitacionDTO,@UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
    console.log(files);
    console.log(createHabitacionDTO);
  }



  @Post()
  async createHabitacion(@Res() res, @Body() createHabitacionDTO: CreateHabitacionDTO) {
    const createdHabitacion = await this.habitacionService.createHabitacion(createHabitacionDTO);
    return res.status(HttpStatus.OK).json({ createdHabitacion });
  }

  @Get()
  async getHabitaciones(@Res() res) {
    const habitaciones = await this.habitacionService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: habitaciones });
  }

  @Get(':id')
  async getHabitacionById(@Res() res, @Param('id') habitacionId: number) {
    const habitacion = await this.habitacionService.findOne(habitacionId);
    if (habitacion) {
      return res.status(HttpStatus.OK).json({ resultado: habitacion });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Habitacion not found' });
    }
  }

  @Put()
  async updateHabitacion(@Res() res, @Body() updateHabitacionDTO: UpdateHabitacionDTO) {
    const updatedHabitacion = await this.habitacionService.updateHabitacion(updateHabitacionDTO);
    return res.status(HttpStatus.OK).json({ updatedHabitacion });
  }

  @Delete(':id')
  async deleteHabitacion(@Res() res, @Param('id') habitacionId: number) {
    const deletedHabitacion = await this.habitacionService.remove(habitacionId);
    if (deletedHabitacion.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
