import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Factura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  fecha: string;
  
  @Column()
  ruc: string;

  @Column()
  razonSocial: string;
  
  @Column()
  direccion: string;

  @Column()
  telefono: string;
  
  @Column()
  estado: string;

  @ManyToOne(() => Reserva, (reserva) => reserva.facturas)
  reserva: Reserva

}