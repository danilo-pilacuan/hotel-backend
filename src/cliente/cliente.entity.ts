import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: string;
  
  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  correo: string;

  @Column()
  clave: string;

  @Column({ default: true })
  activo: boolean;

  @Column()
  tipo: number;
}