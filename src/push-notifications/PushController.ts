import { Body, Controller, Get, Post } from '@nestjs/common';
import { PushService } from './PushService';
import { CronJob } from 'cron';
import { NotificationDto } from './NotificationDto';

@Controller("/notification")
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @UseGuards(AuthGuard)
  @Post()
  sendNotification(@Body() notificationDto: NotificationDto): Promise<string> {
    return this.pushService.sendNotification(notificationDto, user); 
  }
}


