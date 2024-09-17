import { Body, Controller, Get, Post } from '@nestjs/common';
import { PushService } from './PushService';
import { CronJob } from 'cron';
import { NotificationDto } from '../Dto/NotificationDto';

@Controller("/notification")
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @UseGuards(AuthGuard)
  @Post()
  sendNotification(@Body() notificationDto: NotificationDto): Promise<string> {
    getAuth().verifyIdToken(idToken).then((decodedToken) => {
      return this.pushService.sendNotification(notificationDto, user); 
    })
    .catch((error) => {
      return null;
    });
    
  }
}


