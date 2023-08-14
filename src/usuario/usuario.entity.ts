import { Cliente } from 'src/cliente/cliente.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  clave: string;

  @Column({ type: "boolean", default: true })
  activo: boolean;

  @Column()
  tipo: number;

  @OneToOne(() => Cliente)
    cliente: Cliente

  // @OneToMany(() => Reserva, (reserva) => reserva.usuario)
  // reservas: Reserva[]
}