import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Notification } from './Notification';
import { EmailService } from '../Email/EmailService';
import { NotificationDto } from './NotificationDto';

@Injectable()
export class PushService {

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private emailService: EmailService
  ) {}

  async sendNotification(notificationDto: NotificationDto, user: User) {
    try{
      let notification: Notification = {
        second : notificationDto.second,
        minute : notificationDto.minute,
        hour : notificationDto.hour,
        day : notificationDto.day,
        months : notificationDto.months,
        dayOfWeek : notificationDto.dayOfWeek,
        subject : notificationDto.subject, 
        text: notificationDto.text
      }
  
      const job = new CronJob(`
        ${notification.second}
        ${notification.minute}
        ${notification.hour}
        ${notification.day}
        ${notification.months}
        ${notification.dayOfWeek}`, () => {
  
        this.emailService.sendMail(user.email, notification.subject, notification.text)
  
      });
    
      this.schedulerRegistry.addCronJob("User notification", job);
      job.start();
      
      return notification.second + notification.minute + notification.day + notification.months + notification.dayOfWeek 
      + notification.subject + notification.text;
    }
    catch{
      return null;
    }
  }
}
