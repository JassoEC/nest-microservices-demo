import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MicroserviceAModule } from './microservice_a.module';
import { envs } from 'config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroserviceAModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [envs.RMQ_HOST],
        queue: 'microservice_a_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
