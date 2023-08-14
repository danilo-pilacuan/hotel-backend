import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDTO, UpdateServicioDTO } from './dto/servicio.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/helperServicio';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('servicio')
@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Post('uploadImages')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'fotoNormal', maxCount: 1 },
    { name: 'foto360', maxCount: 1 },
  ],
  {
    storage: diskStorage({
      destination: Helper.destinationPath,
      filename: Helper.customFileName,
    }),
  },))
  async uploadFiles(@Res() res,@Body() createServicioDTO: CreateServicioDTO,@UploadedFiles() files: { fotoNormal?: Express.Multer.File[], foto360?: Express.Multer.File[] }) {
    console.log("-------------------------------------------")
    console.log(files);
    console.log(createServicioDTO);


    const createdServicio = await this.servicioService.createServicioImg(createServicioDTO,'images/servicios/'+files.fotoNormal[0].filename,'images/servicios/'+files.foto360[0].filename);
    return res.status(HttpStatus.OK).json({ createdServicio });
    //return res.status(HttpStatus.OK).json({ "ok":"ok" });
  }

  @Post()
  async createServicio(@Res() res, @Body() createServicioDTO: CreateServicioDTO) {
    const createdServicio = await this.servicioService.createServicio(createServicioDTO);
    return res.status(HttpStatus.OK).json({ createdServicio });
  }

  @Get()
  async getServicios(@Res() res) {
    const servicios = await this.servicioService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: servicios });
  }

  @Get(':id')
  async getServicioById(@Res() res, @Param('id') servicioId: number) {
    const servicio = await this.servicioService.findOne(servicioId);
    if (servicio) {
      return res.status(HttpStatus.OK).json({ resultado: servicio });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Servicio not found' });
    }
  }

  @Put()
  async updateServicio(@Res() res, @Body() updateServicioDTO: UpdateServicioDTO) {
    const updatedServicio = await this.servicioService.updateServicio(updateServicioDTO);
    return res.status(HttpStatus.OK).json({ updatedServicio });
  }

  @Put('uploadImages')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'fotoNormal', maxCount: 1 },
    { name: 'foto360', maxCount: 1 },
  ],
  {
    storage: diskStorage({
      destination: Helper.destinationPath,
      filename: Helper.customFileName,
    }),
  },))
  async uploadFilesUpdate(@Res() res,@Body() updateServicioDTO: UpdateServicioDTO,@UploadedFiles() files?: { fotoNormal?: Express.Multer.File[], foto360?: Express.Multer.File[] }) {
    console.log(files);
    console.log(updateServicioDTO);
    let updateServicio;
    if(files)
    {
      if(files.fotoNormal && files.foto360)
      {
        updateServicio = await this.servicioService.updateServicioImg(updateServicioDTO,'images/servicios/'+files.fotoNormal[0].filename,'images/servicios/'+files.foto360[0].filename);
      }
      else if(files.foto360)
      {
        updateServicio = await this.servicioService.updateServicioImg(updateServicioDTO,'','images/servicios/'+files.foto360[0].filename);
      }
      else if(files.fotoNormal)
      {
        updateServicio = await this.servicioService.updateServicioImg(updateServicioDTO,'images/servicios/'+files.fotoNormal[0].filename,'');
      }
      else
      {
        console.log("/////////////////////////////")
        updateServicio = await this.servicioService.updateServicioImg(updateServicioDTO,'','');
      }
    }
    else
    {
      updateServicio = await this.servicioService.updateServicioImg(updateServicioDTO,'','');
    }
    
    return res.status(HttpStatus.OK).json({ updateServicio });
    //return res.status(HttpStatus.OK).json({ "ok":"ok" });
  }


  @Delete(':id')
  async deleteServicio(@Res() res, @Param('id') servicioId: number) {
    const deletedServicio = await this.servicioService.remove(servicioId);
    if (deletedServicio.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Servicio not found' });
    }
  }
}
