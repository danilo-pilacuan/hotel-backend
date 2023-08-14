import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { CreatePlatoDTO, UpdatePlatoDTO } from './dto/plato';
import { ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/shared/helperPlato';

@ApiTags('plato')
@Controller('plato')
export class PlatoController {
  constructor(private readonly platoService: PlatoService) {}

  @Post('uploadImages')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'foto', maxCount: 1 },
  ],
  {
    storage: diskStorage({
      destination: Helper.destinationPath,
      filename: Helper.customFileName,
    }),
  },))
  async createPlato(@Res() res,@Body() createPlatoDTO: CreatePlatoDTO,@UploadedFiles() files: { foto?: Express.Multer.File[]}) {
    console.log("-------------------------------------------")
    console.log(files);
    console.log(createPlatoDTO);


    const createdServicio = await this.platoService.createPlatoImg(createPlatoDTO,'images/platos/'+files.foto[0].filename);
    return res.status(HttpStatus.OK).json({ createdServicio });
    //return res.status(HttpStatus.OK).json({ "ok":"ok" });
  }

  // @Post()
  // async createPlato(@Res() res, @Body() createPlatoDTO: CreatePlatoDTO) {
  //   const createdPlato = await this.platoService.createPlato(createPlatoDTO);
  //   return res.status(HttpStatus.OK).json({ createdPlato });
  // }

  @Get()
  async getPlatos(@Res() res) {
    const platos = await this.platoService.findAll();
    return res.status(HttpStatus.OK).json({ resultado: platos });
  }

  @Get(':id')
  async getPlatoById(@Res() res, @Param('id') platoId: number) {
    const plato = await this.platoService.findOne(platoId);
    if (plato) {
      return res.status(HttpStatus.OK).json({ resultado: plato });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'Plato not found' });
    }
  }

  // @Put()
  // async updatePlato(@Res() res, @Body() updatePlatoDTO: UpdatePlatoDTO) {
  //   const updatedPlato = await this.platoService.updatePlato(updatePlatoDTO);
  //   return res.status(HttpStatus.OK).json({ updatedPlato });
  // }

  @Put('uploadImages')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'foto', maxCount: 1 },
  ],
  {
    storage: diskStorage({
      destination: Helper.destinationPath,
      filename: Helper.customFileName,
    }),
  },))
  async uploadFilesUpdate(@Res() res,@Body() updatePlatoDTO: UpdatePlatoDTO,@UploadedFiles() files?: { foto?: Express.Multer.File[] }) {
    console.log(files);
    console.log(updatePlatoDTO);
    let updatedPlato;
    if(files)
    {
      if(files.foto)
      {
        updatedPlato = await this.platoService.updatePlatoImg(updatePlatoDTO,'images/platos/'+files.foto[0].filename);
      }
      else 
      {
        updatedPlato = await this.platoService.updatePlatoImg(updatePlatoDTO,'');
      }
      
    }
    else
    {
      updatedPlato = await this.platoService.updatePlatoImg(updatePlatoDTO,'');
    }
    
    return res.status(HttpStatus.OK).json({ updatedPlato });



    //return res.status(HttpStatus.OK).json({ "ok":"ok" });
  }


  @Delete(':id')
  async deletePlato(@Res() res, @Param('id') platoId: number) {
    const deletedPlato = await this.platoService.remove(platoId);
    if (deletedPlato.affected > 0) {
      return res.status(HttpStatus.OK).json({ ok: 'ok' });
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ error: 'error' });
    }
  }
}
