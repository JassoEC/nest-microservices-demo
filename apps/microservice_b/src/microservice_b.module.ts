import { Module } from '@nestjs/common';
import { MicroserviceBController } from './microservice_b.controller';
import { MicroserviceBService } from './microservice_b.service';

@Module({
  imports: [],
  controllers: [MicroserviceBController],
  providers: [MicroserviceBService],
})
export class MicroserviceBModule {}
