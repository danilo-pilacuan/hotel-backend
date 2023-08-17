import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Reserva } from './reserva.entity';
import { CreateReservaDTO, UpdateReservaDTO } from './dto/reserva.dto';
import { EmailService } from './email.service';
import { Habitacion } from 'src/habitacion/habitacion.entity';

@Injectable()
export class ReservaService {
  
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
    @InjectRepository(Habitacion)
    private habitacionRepository: Repository<Habitacion>,
    @Inject(EmailService)
    private readonly emailService: EmailService,

  ) {}

  async createReserva(createReservaDTO: CreateReservaDTO): Promise<Reserva> {
    let reserva = new Reserva();
    reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reserva.fechaLlegada=createReservaDTO.fechaLlegada;
    reserva.fechaSalida=createReservaDTO.fechaSalida;
    // reserva.horaLlegada=createReservaDTO.horaLlegada;
    // reserva.horaSalida=createReservaDTO.horaSalida;
    reserva.estado=createReservaDTO.estado;
    reserva.detalles=createReservaDTO.detalles;
    // reserva.total=createReservaDTO.total;
    reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reserva.habitacion=<any>{id: createReservaDTO.habitacionId};
    console.log(reserva)
    //return reserva;
    console.log("GGGGGGGGGGGGGGG")

    

    return await this.reservaRepository.save(createReservaDTO);
  }

  async createReservaImg(createReservaDTO: CreateReservaDTO,urlFotoComprobante:string): Promise<Reserva> {
    // let servicioNuevo = new Servicio();
    // servicioNuevo.descripcion=createHabitacionDTO.descripcion;
    // servicioNuevo.nombre=createHabitacionDTO.nombre;
    // servicioNuevo.tipo=createHabitacionDTO.tipo;
    // servicioNuevo.precio=createHabitacionDTO.precio;
    // servicioNuevo.urlFotoNormal=urlFotoNormal;
    // servicioNuevo.urlFoto360=urlFoto360;
    // // habitacionNueva.numero=createHabitacionDTO.numero
    // // habitacionNueva.piso=createHabitacionDTO.piso
    // // habitacionNueva.estado=createHabitacionDTO.estado;
    // // habitacionNueva.urlFotoNormal=urlFotoNormal;
    // // habitacionNueva.urlFoto360=urlFoto360;
    // // habitacionNueva.tarifa=<any>{id: createHabitacionDTO.tarifaId};
    // return await this.servicioRepository.save(servicioNuevo);

    console.log("-----------------------------------------------------------------")
    console.log("urlFotoComprobante")
    console.log(urlFotoComprobante)
    console.log("createReservaDTO")
    console.log(createReservaDTO)
    console.log("-----------------------------------------------------------------")

    let reserva = new Reserva();
    // console.log("reserva")
    // console.log(reserva)
    reserva.estado=createReservaDTO.estado;
    // console.log("reserva")
    // console.log(reserva)
    reserva.fechaLlegada=new Date(createReservaDTO.fechaLlegada);
    // console.log("reserva")
    // console.log(reserva)
    reserva.fechaSalida=new Date(createReservaDTO.fechaSalida);
    // console.log("reserva")
    // console.log(reserva)
    reserva.fechaCreacion=new Date(createReservaDTO.fechaCreacion);
    // console.log("reserva")
    // console.log(reserva)
    reserva.detalles=createReservaDTO.detalles;
    // console.log("reserva")
    // console.log(reserva)
    // reserva.total=createReservaDTO.total;
    // console.log("reserva")
    // console.log(reserva)
    //reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reserva.habitacion=<any>{id: createReservaDTO.habitacionId};
    // console.log("reserva")
    // console.log(reserva)
    reserva.cliente=<any>{cedula: createReservaDTO.clienteCedula};
    // console.log("reserva")
    // console.log(reserva)
    reserva.urlFotoComprobante=urlFotoComprobante;
    // console.log("reserva")
    // console.log(reserva)
    // console.log("GGGGGGGGGGGGGGG")
    //return reserva;

    const habitacionReserva = await this.habitacionRepository.findOne({
      where:{
        id:createReservaDTO.habitacionId
      }
    });

    habitacionReserva.estado=2;

    this.habitacionRepository.save(habitacionReserva);

    this.emailService.sendEmail('dan12metal@gmail.com', 'Reserva realizada con éxito', 'Reserva realizada con éxito, gracias por escoger hotel las cascadas');

    return await this.reservaRepository.save(reserva);

  }

  async updateReservaImg(updateReservaDTO: UpdateReservaDTO,urlFotoComprobante?:string): Promise<Reserva> {
    // let servicioNuevo = new Servicio();
    // servicioNuevo.descripcion=createHabitacionDTO.descripcion;
    // servicioNuevo.nombre=createHabitacionDTO.nombre;
    // servicioNuevo.tipo=createHabitacionDTO.tipo;
    // servicioNuevo.precio=createHabitacionDTO.precio;
    // servicioNuevo.urlFotoNormal=urlFotoNormal;
    // servicioNuevo.urlFoto360=urlFoto360;
    // // habitacionNueva.numero=createHabitacionDTO.numero
    // // habitacionNueva.piso=createHabitacionDTO.piso
    // // habitacionNueva.estado=createHabitacionDTO.estado;
    // // habitacionNueva.urlFotoNormal=urlFotoNormal;
    // // habitacionNueva.urlFoto360=urlFoto360;
    // // habitacionNueva.tarifa=<any>{id: createHabitacionDTO.tarifaId};
    // return await this.servicioRepository.save(servicioNuevo);

    console.log("-----------------------------------------------------------------")
    console.log("urlFotoComprobante")
    console.log(urlFotoComprobante)
    console.log("createReservaDTO")
    console.log(updateReservaDTO)
    console.log("-----------------------------------------------------------------")

    let reservaActualizada = await this.reservaRepository.findOne({
      where:{
        id: updateReservaDTO.id
      }
    })

    //let reserva = new Reserva();
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.estado=updateReservaDTO.estado;
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.fechaLlegada=new Date(updateReservaDTO.fechaLlegada);
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.fechaSalida=new Date(updateReservaDTO.fechaSalida);
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.fechaCreacion=new Date(updateReservaDTO.fechaCreacion);
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.detalles=updateReservaDTO.detalles;
    // console.log("reserva")
    // console.log(reserva)
    // reserva.total=createReservaDTO.total;
    // console.log("reserva")
    // console.log(reserva)
    //reserva.fechaCreacion=createReservaDTO.fechaCreacion;
    reservaActualizada.habitacion=<any>{id: updateReservaDTO.habitacionId};
    // console.log("reserva")
    // console.log(reserva)
    reservaActualizada.cliente=<any>{cedula: updateReservaDTO.clienteCedula};
    // console.log("reserva")
    // console.log(reserva)
    if(urlFotoComprobante!='')
    {
      reservaActualizada.urlFotoComprobante=urlFotoComprobante;
    }

    const habitacionReserva = await this.habitacionRepository.findOne({
      where:{
        id:updateReservaDTO.habitacionId
      }
    });

    
    
    if(updateReservaDTO.estado==2)
    {
      habitacionReserva.estado=2;
    }
    else
    {
      habitacionReserva.estado=1;
    }

    

    this.habitacionRepository.save(habitacionReserva);

    // console.log("reserva")
    // console.log(reserva)
    // console.log("GGGGGGGGGGGGGGG")
    //return reserva;
    return await this.reservaRepository.save(reservaActualizada);

  }

  async updateReserva(updateReservaDTO: UpdateReservaDTO): Promise<Reserva> {
    //return await this.reservaRepository.save(updateReservaDTO);
    return null;
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepository.find({
      relations:{
        cliente:true,
        habitacion:true,
        reservasPlato:{
          plato:true
        }
      }
    });
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservaRepository.findOneBy({id});
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.reservaRepository.delete(id);
  }
}
