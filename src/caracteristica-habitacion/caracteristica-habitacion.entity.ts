import { Habitacion } from 'src/habitacion/habitacion.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class CaracteristicaHabitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  descripcion: string;

  @Column()
  tipo: string;


  @ManyToMany(() => Habitacion, (habitacion) => habitacion.caracteristicasHabitacion)
  habitaciones: Habitacion[]

}