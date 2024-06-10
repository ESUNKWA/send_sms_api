import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({})
  );
  // Ajoutez cette ligne pour définir le préfixe global pour les routes
  app.setGlobalPrefix('/just/send');

  await app.listen(3000);
}
bootstrap();
