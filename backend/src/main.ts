import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { prsimaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
