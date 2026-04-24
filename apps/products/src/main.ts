import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './products.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const tcpMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
      transport: Transport.TCP,
      options: {
        port: 3003,
      },
    });

  const redisMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });
  await Promise.all([tcpMicroservice.listen(), redisMicroservice.listen()]);
  // await app.listen();
  console.log('Products service is running on port: 3003');
}
bootstrap();
