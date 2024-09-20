import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { Notification } from './Notification';
import { EmailService } from '../Email/EmailService';
import { NotificationDto } from './NotificationDto';
import { User } from 'src/User/user';
import { notStrictEqual } from 'assert';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Injectable()
export class PushService {

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private emailService: EmailService
  ) {}

  async sendNotification(notificationDto: NotificationDto, user: User) {
    try{
      let notification: Notification = {
        subject: notificationDto.subject,
        text: notificationDto.text,
        date: notificationDto.date,
        time: notificationDto.time,
        enddate: new Date(notificationDto.enddate),
        cron: notificationDto.cron
      }
      let count = 1;
      const job = new CronJob(notification.cron, () => {
        //this.emailService.sendMail(user.email, notification.subject, notification.text)
        if(count == job.n || job.lastDate().getTime() >= notification.enddate.getTime()){
          job.stop();
        }else{
          console.log(count) // для проверки
          console.log(job.lastDate().getTime()) // для проверки
          console.log(notification.enddate.getTime()) // для проверки
          count += 1; 
        }
      });
      job.n = notificationDto.n;
      this.schedulerRegistry.addCronJob("User notification", job);
      job.start()
      return notification.subject + notificationDto.text;
    }
    catch{
      return null;
    }
  }
}
