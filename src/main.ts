import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
async function bootstrap() {
  dotenv.config(); 
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'], // Add the HTTP methods you need
  });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT
  await app.listen(port,
    ()=>{
      console.log(`listening on ${port}...`)
    });
}
bootstrap();
