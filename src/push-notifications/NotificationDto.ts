
export class NotificationDto {
    date:Date;
    time: string;
    n:number;
    enddate: Date = new Date();
    cron:string;
    subject: string; 
    text: string;
}