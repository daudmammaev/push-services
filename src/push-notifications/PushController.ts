import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PushService } from './PushService';
import { CronJob } from 'cron';
import { NotificationDto } from './NotificationDto';
import { AuthGuard } from 'src/auth/AuthGuard';
import { User } from 'src/User/user';

@Controller("notification")
export class PushController {
  constructor(private readonly pushService: PushService) {}

  //@UseGuards(AuthGuard)
  @Post()
  sendNotification(@Body() notificationDto: NotificationDto, user: User): Promise<string> {
    return this.pushService.sendNotification(notificationDto, user); 
  }
}


