import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable the global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips any properties that do not have decorators
      forbidNonWhitelisted: true, // throws an error if there are unknown properties
      transform: true, // automatically transforms payloads to be objects typed according to their DTO classes
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
