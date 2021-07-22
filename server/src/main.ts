import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   const PORT = process.env.START_PORT;

   const config = new DocumentBuilder()
      .setTitle('Vadji Shop API')
      .setDescription('online shop')
      .setVersion('1.0.0')
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api/docs', app, document);

   await app.listen(PORT || 3000, () => console.log(PORT));
}
bootstrap();
