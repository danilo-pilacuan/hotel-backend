import { Habitacion } from 'src/habitacion/habitacion.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Tarifa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;
  
  @Column()
  pax: number;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  valor: number;

  @OneToMany(() => Habitacion, (habitacion) => habitacion.tarifa)
  habitaciones: Habitacion[]

}