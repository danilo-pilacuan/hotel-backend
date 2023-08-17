import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8080' ,
      'http://192.168.0.124:8080' ,
      'http://127.0.0.1' ,
    ],
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Hotel las cascadas')
    .setDescription('API Reservas hotel las cascadas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000);
}
bootstrap();
