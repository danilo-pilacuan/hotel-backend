import { Caracteristica } from 'src/caracteristica/caracteristica.entity';
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

  @ManyToMany(() => Caracteristica, (caracteristica) => caracteristica.habitaciones)
    @JoinTable({
      name: "habitacion_caracteristicas",
    })
    caracteristicas: Caracteristica[]

    

    @ManyToOne(() => Tarifa, (tarifa) => tarifa.habitaciones)
    tarifa: Tarifa

    @OneToMany(() => Reserva, (reserva) => reserva.habitacion)
    reservas: Reserva[]
  
}