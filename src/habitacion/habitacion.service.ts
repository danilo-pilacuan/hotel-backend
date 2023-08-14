import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, MoreThan, LessThan } from 'typeorm';
import { Habitacion } from './habitacion.entity';
import { CreateHabitacionDTO, UpdateHabitacionDTO } from './dto/habitacion.dto';

@Injectable()
export class HabitacionService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,
  ) {}

  async createHabitacion(createHabitacionDTO: CreateHabitacionDTO,urlFotoNormal:string,urlFoto360:string): Promise<Habitacion> {
    let habitacionNueva = new Habitacion();
    habitacionNueva.numero=createHabitacionDTO.numero
    habitacionNueva.piso=createHabitacionDTO.piso
    habitacionNueva.estado=createHabitacionDTO.estado;
    habitacionNueva.urlFotoNormal=urlFotoNormal;
    habitacionNueva.urlFoto360=urlFoto360;
    habitacionNueva.tarifa=<any>{id: createHabitacionDTO.tarifaId};
    return await this.habitacionRepository.save(habitacionNueva);
  }
  async updateHabitacionImgs(updateHabitacion: UpdateHabitacionDTO,urlFotoNormal:string,urlFoto360:string): Promise<Habitacion> {
    console.log("***********************************************")
    console.log(updateHabitacion)
    console.log("***********************************************")
    
    let habitacionActualizada = await this.habitacionRepository.findOne({
      where:{
        id: updateHabitacion.id
      }
    })
    //habitacionActualizada.id=updateHabitacion.id
    habitacionActualizada.numero=updateHabitacion.numero
    habitacionActualizada.piso=updateHabitacion.piso
    habitacionActualizada.estado=updateHabitacion.estado;
    if(urlFoto360!='')
    {
      habitacionActualizada.urlFoto360=urlFoto360;
    }
    if(urlFotoNormal!='')
    {habitacionActualizada.urlFotoNormal=urlFotoNormal;}
    habitacionActualizada.tarifa=<any>{id: updateHabitacion.tarifaId};
    console.log("----------------------------------------------")
    console.log(habitacionActualizada)
    console.log("----------------------------------------------")
    return await this.habitacionRepository.save(habitacionActualizada);

  }

  

  async updateHabitacion(updateHabitacionDTO: UpdateHabitacionDTO): Promise<Habitacion> {
    return await this.habitacionRepository.save(updateHabitacionDTO);
  }

  findAll(): Promise<Habitacion[]> {
    return this.habitacionRepository.find({relations:{
      tarifa:true
    }});
  }

  findHab(): Promise<Habitacion[]> {
    return this.habitacionRepository.find({
      where:{
        tarifa:{
          id:LessThan(12)
        }
      },
      relations:{
      tarifa:true
    }});
  }

  findServ(): Promise<Habitacion[]> {
    return this.habitacionRepository.find({
      where:{
        tarifa:{
          id:MoreThan(11)
        }
      },
      relations:{
      tarifa:true
    }});
  }

  findOne(id: number): Promise<Habitacion> {
    return this.habitacionRepository.findOne({
      where:{
        id
      },
      relations:{
        tarifa:true,
        //caracteristicasHabitacion:true
      }
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.habitacionRepository.delete(id);
  }
}
