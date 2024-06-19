import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './graphql/modules/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { envs } from 'config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
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
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
