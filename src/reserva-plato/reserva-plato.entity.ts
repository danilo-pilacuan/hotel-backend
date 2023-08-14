import { Plato } from 'src/plato/plato.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class ReservaPlato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad:number;

  @ManyToOne(() => Reserva, (reserva) => reserva.reservasPlato)
  reserva: Reserva

  @ManyToOne(() => Plato, (plato) => plato.reservasPlato)
  plato: Plato

}