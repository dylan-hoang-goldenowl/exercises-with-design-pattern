import {
	EmailService,
	SMSService,
	NotificationSender,
} from "../../Solid/5.Dip/services";
import { NotificationService } from "../../Solid/5.Dip/interfaces";

describe("EmailService", () => {
	let emailService: EmailService;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		emailService = new EmailService();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should send email notification", () => {
		emailService.sendNotification("Test email message");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Sending email notification:",
			"Test email message"
		);
	});

	test("should implement NotificationService interface", () => {
		expect(emailService).toHaveProperty("sendNotification");
		expect(typeof emailService.sendNotification).toBe("function");
	});
});

describe("SMSService", () => {
	let smsService: SMSService;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		smsService = new SMSService();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should send SMS notification", () => {
		smsService.sendNotification("Test SMS message");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Sending sms notification:",
			"Test SMS message"
		);
	});

	test("should implement NotificationService interface", () => {
		expect(smsService).toHaveProperty("sendNotification");
		expect(typeof smsService.sendNotification).toBe("function");
	});
});

describe("NotificationSender", () => {
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should send notification using EmailService", () => {
		const emailService = new EmailService();
		const notificationSender = new NotificationSender(emailService);
		notificationSender.sendNotification("Email via sender");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Sending email notification:",
			"Email via sender"
		);
	});

	test("should send notification using SMSService", () => {
		const smsService = new SMSService();
		const notificationSender = new NotificationSender(smsService);
		notificationSender.sendNotification("SMS via sender");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Sending sms notification:",
			"SMS via sender"
		);
	});

	test("should work with any NotificationService implementation", () => {
		const mockService: NotificationService = {
			sendNotification: jest.fn(),
		};
		const notificationSender = new NotificationSender(mockService);
		notificationSender.sendNotification("Mock message");
		expect(mockService.sendNotification).toHaveBeenCalledWith("Mock message");
	});

	test("should delegate sendNotification to injected service", () => {
		const emailService = new EmailService();
		const sendNotificationSpy = jest.spyOn(emailService, "sendNotification");
		const notificationSender = new NotificationSender(emailService);
		notificationSender.sendNotification("Test delegation");
		expect(sendNotificationSpy).toHaveBeenCalledWith("Test delegation");
	});
});
