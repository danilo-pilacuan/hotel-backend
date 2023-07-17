import { CaracteristicaHabitacion } from 'src/caracteristica-habitacion/caracteristica-habitacion.entity';
import { Reserva } from 'src/reserva/reserva.entity';
import { Tarifa } from 'src/tarifa/tarifa.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Habitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  piso: string;

  @Column()
  urlFotoNormal: string;
  
  @Column()
  urlFoto360: string;

  @Column()
  estado: number;

  @ManyToMany(() => CaracteristicaHabitacion, (caracteristicaHabitacion) => caracteristicaHabitacion.habitaciones)
    @JoinTable({
      name: "habitacion_caracteristicas_habitacion",
    })
    caracteristicasHabitacion: CaracteristicaHabitacion[]

    

    @ManyToOne(() => Tarifa, (tarifa) => tarifa.habitaciones)
    tarifa: Tarifa

    @OneToMany(() => Reserva, (reserva) => reserva.habitacion)
    reservas: Reserva[]
  
}