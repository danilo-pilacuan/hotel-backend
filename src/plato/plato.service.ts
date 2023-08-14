import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Plato } from './plato.entity';
import { CreatePlatoDTO, UpdatePlatoDTO } from './dto/plato';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(Plato)
    private platoRepository: Repository<Plato>,
  ) {}

  async createPlatoImg(createPlatoDTO: CreatePlatoDTO,urlFoto:string): Promise<Plato> {
    let platoNuevo = new Plato();
    platoNuevo.nombre=createPlatoDTO.nombre;
    platoNuevo.descripcion=createPlatoDTO.descripcion;
    platoNuevo.precio=createPlatoDTO.precio;
    platoNuevo.urlFoto=urlFoto;
    
    // platoNueva.numero=createPlatoDTO.numero
    // platoNueva.piso=createPlatoDTO.piso
    // platoNueva.estado=createPlatoDTO.estado;
    // platoNueva.urlFotoNormal=urlFotoNormal;
    // platoNueva.urlFoto360=urlFoto360;
    // platoNueva.tarifa=<any>{id: createPlatoDTO.tarifaId};
    return await this.platoRepository.save(platoNuevo);
  }


  async updatePlatoImg(updatePlato: UpdatePlatoDTO,urlFoto): Promise<Plato> {
    console.log("***********************************************")
    console.log(updatePlato)
    console.log("***********************************************")
    
    let platoActualizado = await this.platoRepository.findOne({
      where:{
        id: updatePlato.id
      }
    })
    //platoActualizado.id=updatePlato.id
    platoActualizado.nombre=updatePlato.nombre
    platoActualizado.descripcion=updatePlato.descripcion
    platoActualizado.precio=updatePlato.precio
    
    if(urlFoto!='')
    {
      platoActualizado.urlFoto=urlFoto;
    }
    
    
    console.log("----------------------------------------------")
    console.log(platoActualizado)
    console.log("----------------------------------------------")
    return await this.platoRepository.save(platoActualizado);

  }

  async createPlato(createPlatoDTO: CreatePlatoDTO): Promise<Plato> {
    return await this.platoRepository.save(createPlatoDTO);
  }

  async updatePlato(updatePlatoDTO: UpdatePlatoDTO): Promise<Plato> {
    return await this.platoRepository.save(updatePlatoDTO);
  }

  findAll(): Promise<Plato[]> {
    return this.platoRepository.find();
  }

  findOne(id: number): Promise<Plato> {
    return this.platoRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.platoRepository.delete(id);
  }

  

}
