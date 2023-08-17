import { Servicio } from 'src/servicio/servicio.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class ReservaServicio {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reserva, (reserva) => reserva.reservasServicio)
  reserva: Reserva

  @ManyToOne(() => Servicio, (servicio) => servicio.reservasServicio)
  servicio: Servicio

}