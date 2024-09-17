import {Entity}  from 'typeorm';

@Entity()
export class Notification {
    second:string;
    minute:string; 
    hour:string;
    day:string;
    months:string; 
    dayOfWeek:string;
    subject: string; 
    text: string;
}