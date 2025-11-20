import { OnlinePaymentProcessor, OfflinePaymentProcessor } from "./interfaces";

export class CreditCardPayment implements OnlinePaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing credit card payment of $${amount}`);
		console.log("Validating credit card details...");
		console.log("Charging the credit card...");
	}
}

export class PayPalPayment implements OnlinePaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Processing PayPal payment of $${amount}`);
		console.log("Redirecting to PayPal...");
		console.log("Completing PayPal transaction...");
	}
}

export class CashPayment implements OfflinePaymentProcessor {
	processPayment(amount: number): void {
		console.log(`Accepting cash payment of $${amount} at the counter`);
		console.log("Counting cash...");
	}
}
