import { EmailService, SMSService, NotificationSender } from "./services";

const emailService = new EmailService();
const emailNotification = new NotificationSender(emailService);
emailNotification.sendNotification("Hello, this is a notification!");

const smsService = new SMSService();
const smsNotification = new NotificationSender(smsService);
smsNotification.sendNotification("Hello, this is a notification!");
