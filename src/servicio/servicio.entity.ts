import { ReservaServicio } from 'src/reserva-servicio/reserva-servicio.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  descripcion: string;

  @Column()
  tipo: number;
  
  @Column()
  precio: number;

  @Column()
  urlFotoNormal: string;
  
  @Column()
  urlFoto360: string;

  @OneToMany(() => ReservaServicio, (reservaServicio) => reservaServicio.reserva)
  reservasServicio: ReservaServicio[]

}