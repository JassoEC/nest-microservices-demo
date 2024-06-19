import { NestFactory } from '@nestjs/core';
import { MicroserviceBModule } from './microservice_b.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from 'config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroserviceBModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [envs.RMQ_HOST],
        queue: 'microservice_b_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
