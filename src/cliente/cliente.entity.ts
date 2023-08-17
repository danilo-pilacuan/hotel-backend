import { Reserva } from 'src/reserva/reserva.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Cliente {
  
  @PrimaryColumn()
  cedula: string;
  
  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;
  
  @Column()
  correo: string;

  @Column()
  telefono: string;

  @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

  @OneToMany(() => Reserva, (reserva) => reserva.cliente)
  reservas: Reserva[]
}