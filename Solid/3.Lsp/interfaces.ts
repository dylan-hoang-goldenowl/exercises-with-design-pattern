export interface PaymentProcessor {
	processPayment(amount: number): void;
}

export interface OnlinePaymentProcessor extends PaymentProcessor {}

export interface OfflinePaymentProcessor extends PaymentProcessor {}
