import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { ServicioModule } from './servicio/servicio.module';
import { CaracteristicaModule } from './caracteristica/caracteristica.module';
import { ReservaModule } from './reserva/reserva.module';
import { FacturaModule } from './factura/factura.module';
import { TarifaModule } from './tarifa/tarifa.module';
import { PlatoModule } from './plato/plato.module';
import { ReservaPlatoModule } from './reserva-plato/reserva-plato.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot:"/images"
    })
    ,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dbhotel',
    autoLoadEntities: true,
    synchronize: true,
  }),UsuarioModule, ClienteModule, HabitacionModule, ServicioModule, CaracteristicaModule, ReservaModule, FacturaModule, TarifaModule, PlatoModule, ReservaPlatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
