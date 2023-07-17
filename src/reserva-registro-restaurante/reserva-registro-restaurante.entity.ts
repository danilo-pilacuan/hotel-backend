import { RegistroRestaurante } from 'src/registro-restaurante/registro-restaurante.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class ReservaRegistroRestaurante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad:number;

  @ManyToOne(() => Reserva, (reserva) => reserva.reservasRegistroRestaurante)
  reserva: Reserva

  @ManyToOne(() => RegistroRestaurante, (registroRestaurante) => registroRestaurante.reservasRegistroRestaurante)
  registroRestaurante: RegistroRestaurante

}