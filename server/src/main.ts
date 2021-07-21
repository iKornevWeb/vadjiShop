import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const PORT = process.env.START_PORT;
  await app.listen(PORT || 3000, () => console.log(PORT));
}
bootstrap();
