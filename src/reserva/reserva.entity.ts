import { Factura } from 'src/factura/factura.entity';
import { Habitacion } from 'src/habitacion/habitacion.entity';
import { RegistroRestaurante } from 'src/registro-restaurante/registro-restaurante.entity';
import { ReservaRegistroRestaurante } from 'src/reserva-registro-restaurante/reserva-registro-restaurante.entity';
import { Servicio } from 'src/servicio/servicio.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fechaCreacion: string;

  @Column({ type: 'date' })
  fechaLlegada: string;

  @Column({ type: 'date' })
  fechaSalida: string;

  @Column()
  horaLlegada: string;

  @Column()
  horaSalida: string;

  @Column()
  estado:number;

  @Column()
  numeroPersonas:number;
  
  @Column()
  detalles:number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  total:number;

  @ManyToMany(() => Servicio, (servicio) => servicio.reservas)
    @JoinTable({
         name: "reservas_servicios",
      })
    servicios: Servicio[]

    // @ManyToMany(() => RegistroRestaurante, (registroRestaurante) => registroRestaurante.reservas)
    // @JoinTable({
    //   name: "reserva-registro-restaurante",
    // })
    // registrosRestaurante: RegistroRestaurante[];
    // @Column()
    // cantidad:number;

  @ManyToOne(() => Habitacion, (habitacion) => habitacion.reservas)
  habitacion: Habitacion
  

  @OneToMany(() => ReservaRegistroRestaurante, (reservaRegistroRestaurante) => reservaRegistroRestaurante.reserva)
  reservasRegistroRestaurante: ReservaRegistroRestaurante[]

  @ManyToOne(() => Factura, (factura) => factura.reservas)
  factura: Factura

}