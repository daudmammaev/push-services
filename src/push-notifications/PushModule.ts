import { Module } from '@nestjs/common';
import { PushController } from './PushController';
import { PushService } from './PushService';
import { SchedulerRegistry } from '@nestjs/schedule';


@Module({
  imports: [],
  controllers: [PushController],
  providers: [PushService, SchedulerRegistry],
})
export class PushModule {}
