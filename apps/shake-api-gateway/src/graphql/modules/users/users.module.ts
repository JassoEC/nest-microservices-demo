import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { AppService } from 'apps/shake-api-gateway/src/app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE_A',
        transport: Transport.RMQ,
        options: {
          urls: [envs.RMQ_HOST],
          queue: 'microservice_a_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'MICROSERVICE_B',
        transport: Transport.RMQ,
        options: {
          urls: [envs.RMQ_HOST],
          queue: 'microservice_b_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService, AppService],
})
export class UsersModule {}
