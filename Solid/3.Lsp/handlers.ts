import { OnlinePaymentProcessor, OfflinePaymentProcessor } from "./interfaces";

export function handleOnlinePayment(
	payment: OnlinePaymentProcessor,
	amount: number
): void {
	console.log("Starting online payment flow...");
	payment.processPayment(amount);
	console.log("Online payment completed.");
}

export function handleOfflinePayment(
	payment: OfflinePaymentProcessor,
	amount: number
): void {
	console.log("Starting offline payment flow...");
	payment.processPayment(amount);
	console.log("Offline payment completed.");
}
