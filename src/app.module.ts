import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { HabitacionModule } from './habitacion/habitacion.module';
import { ServicioModule } from './servicio/servicio.module';
import { CaracteristicaHabitacionModule } from './caracteristica-habitacion/caracteristica-habitacion.module';
import { ReservaModule } from './reserva/reserva.module';
import { FacturaModule } from './factura/factura.module';
import { TarifaModule } from './tarifa/tarifa.module';
import { RegistroRestauranteModule } from './registro-restaurante/registro-restaurante.module';
import { ReservaRegistroRestauranteModule } from './reserva-registro-restaurante/reserva-registro-restaurante.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


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
    database: 'dbHotel',
    autoLoadEntities: true,
    synchronize: true,
  }),UsuarioModule, ClienteModule, HabitacionModule, ServicioModule, CaracteristicaHabitacionModule, ReservaModule, FacturaModule, TarifaModule, RegistroRestauranteModule, ReservaRegistroRestauranteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
