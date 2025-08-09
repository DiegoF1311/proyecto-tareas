import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Proyecto Tareas Server')
    .setDescription(
      'This REST API, built with Node.js and NestJS, enables task management for individual users. It supports creating, retrieving, updating, and deleting tasks, while ensuring that each user can only access their own data. Users can edit task details, mark tasks as completed or pending, and permanently remove tasks.',
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
