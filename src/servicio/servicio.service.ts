import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Servicio } from './servicio.entity';
import { CreateServicioDTO, UpdateServicioDTO } from './dto/servicio.dto';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private servicioRepository: Repository<Servicio>,
  ) {}

  async createServicioImg(createHabitacionDTO: CreateServicioDTO,urlFotoNormal:string,urlFoto360:string): Promise<Servicio> {
    let servicioNuevo = new Servicio();
    servicioNuevo.descripcion=createHabitacionDTO.descripcion;
    servicioNuevo.nombre=createHabitacionDTO.nombre;
    servicioNuevo.tipo=createHabitacionDTO.tipo;
    servicioNuevo.precio=createHabitacionDTO.precio;
    servicioNuevo.urlFotoNormal=urlFotoNormal;
    servicioNuevo.urlFoto360=urlFoto360;
    // habitacionNueva.numero=createHabitacionDTO.numero
    // habitacionNueva.piso=createHabitacionDTO.piso
    // habitacionNueva.estado=createHabitacionDTO.estado;
    // habitacionNueva.urlFotoNormal=urlFotoNormal;
    // habitacionNueva.urlFoto360=urlFoto360;
    // habitacionNueva.tarifa=<any>{id: createHabitacionDTO.tarifaId};
    return await this.servicioRepository.save(servicioNuevo);
  }

  async updateServicioImg(updateServicioDTO: UpdateServicioDTO,urlFotoNormal:string,urlFoto360:string): Promise<Servicio> {
    let servicioActualizado = await this.servicioRepository.findOne({
      where:{
        id:updateServicioDTO.id
      }
    })
    servicioActualizado.descripcion=updateServicioDTO.descripcion;
    servicioActualizado.nombre=updateServicioDTO.nombre;
    servicioActualizado.tipo=updateServicioDTO.tipo;
    servicioActualizado.precio=updateServicioDTO.precio;
    if(urlFotoNormal!='') servicioActualizado.urlFotoNormal=urlFotoNormal;
    if(urlFoto360!='') servicioActualizado.urlFoto360=urlFoto360;
    
    return await this.servicioRepository.save(servicioActualizado);
  }

  async createServicio(createServicioDTO: CreateServicioDTO): Promise<Servicio> {
    return await this.servicioRepository.save(createServicioDTO);
  }

  async updateServicio(updateServicioDTO: UpdateServicioDTO): Promise<Servicio> {
    return await this.servicioRepository.save(updateServicioDTO);
  }

  findAll(): Promise<Servicio[]> {
    return this.servicioRepository.find();
  }

  findOne(id: number): Promise<Servicio> {
    return this.servicioRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.servicioRepository.delete(id);
  }
}
