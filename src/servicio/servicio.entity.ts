import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  descripcion: string;

  @Column()
  tipo: string;
  
  @Column()
  precio: number;

  @Column()
  urlFotoNormal: string;
  
  @Column()
  urlFoto360: string;

  @ManyToMany(() => Reserva, (reserva) => reserva.servicios)
    reservas: Reserva[]

}