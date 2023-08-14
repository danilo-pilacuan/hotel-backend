import { Cliente } from 'src/cliente/cliente.entity';
import { Factura } from 'src/factura/factura.entity';
import { Habitacion } from 'src/habitacion/habitacion.entity';
import { Plato } from 'src/plato/plato.entity';
import { ReservaPlato } from 'src/reserva-plato/reserva-plato.entity';
import { Servicio } from 'src/servicio/servicio.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "datetime" })
  fechaCreacion: string;

  @Column({ type: "datetime" })
  fechaLlegada: string;

  @Column({ type: "datetime" })
  fechaSalida: string;

  // @Column({ type: 'time' })
  // horaLlegada: string;

  // @Column({ type: 'time' })
  // horaSalida: string;

  @Column()
  estado:number;

  
  @Column()
  detalles:string;

  @Column()
  urlFotoComprobante: string;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  total:number;

  @ManyToMany(() => Servicio, (servicio) => servicio.reservas)
    @JoinTable({
         name: "reservas_servicios",
      })
    servicios: Servicio[]

    // @ManyToMany(() => Plato, (plato) => plato.reservas)
    // @JoinTable({
    //   name: "reserva-plato",
    // })
    // registrosRestaurante: Plato[];
    // @Column()
    // cantidad:number;

  @ManyToOne(() => Habitacion, (habitacion) => habitacion.reservas)
  habitacion: Habitacion
  

  @OneToMany(() => ReservaPlato, (reservaPlato) => reservaPlato.reserva)
  reservasPlato: ReservaPlato[]

  @OneToMany(() => Factura, (factura) => factura.reserva)
  facturas: Factura[]

  @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
  cliente: Cliente

}