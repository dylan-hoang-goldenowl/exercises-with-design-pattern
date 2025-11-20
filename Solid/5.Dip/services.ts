import { NotificationService } from "./interfaces";

export class EmailService implements NotificationService {
	sendNotification(message: string): void {
		console.log("Sending email notification:", message);
	}
}

export class SMSService implements NotificationService {
	sendNotification(message: string): void {
		console.log("Sending sms notification:", message);
	}
}

export class NotificationSender {
	private notificationService: NotificationService;

	constructor(notificationService: NotificationService) {
		this.notificationService = notificationService;
	}

	sendNotification(message: string): void {
		this.notificationService.sendNotification(message);
	}
}
