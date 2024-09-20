import { TimeoutInfo } from 'rxjs';
import {Entity}  from 'typeorm';

@Entity()
export class Notification {
    date:Date;
    time: string;
    enddate: Date = new Date();
    cron: string;
    subject: string; 
    text: string;
}