import { ReservaPlato } from 'src/reserva-plato/reserva-plato.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Plato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  precio: number;

  @Column()
  urlFoto: string;

  // @ManyToMany(() => Reserva, (reserva) => reserva.registrosRestaurante)
  // reservas: Reserva[]

  @OneToMany(() => ReservaPlato, (reservaPlato) => reservaPlato.reserva)
  reservasPlato: ReservaPlato[]

}