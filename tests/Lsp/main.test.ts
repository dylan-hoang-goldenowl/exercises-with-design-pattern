import {
	CreditCardPayment,
	PayPalPayment,
	CashPayment,
} from "../../Solid/3.Lsp/models";
import {
	handleOnlinePayment,
	handleOfflinePayment,
} from "../../Solid/3.Lsp/handlers";

describe("CreditCardPayment", () => {
	let creditCardPayment: CreditCardPayment;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		creditCardPayment = new CreditCardPayment();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should process credit card payment", () => {
		creditCardPayment.processPayment(100);
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			1,
			"Processing credit card payment of $100"
		);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			2,
			"Validating credit card details..."
		);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			3,
			"Charging the credit card..."
		);
	});

	test("should process payment with different amounts", () => {
		creditCardPayment.processPayment(250.5);
		expect(consoleSpy).toHaveBeenCalledWith(
			"Processing credit card payment of $250.5"
		);
	});

	test("should implement OnlinePaymentProcessor interface", () => {
		expect(creditCardPayment).toHaveProperty("processPayment");
		expect(typeof creditCardPayment.processPayment).toBe("function");
	});
});

describe("PayPalPayment", () => {
	let payPalPayment: PayPalPayment;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		payPalPayment = new PayPalPayment();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should process PayPal payment", () => {
		payPalPayment.processPayment(200);
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			1,
			"Processing PayPal payment of $200"
		);
		expect(consoleSpy).toHaveBeenNthCalledWith(2, "Redirecting to PayPal...");
		expect(consoleSpy).toHaveBeenNthCalledWith(
			3,
			"Completing PayPal transaction..."
		);
	});

	test("should process payment with different amounts", () => {
		payPalPayment.processPayment(99.99);
		expect(consoleSpy).toHaveBeenCalledWith(
			"Processing PayPal payment of $99.99"
		);
	});

	test("should implement OnlinePaymentProcessor interface", () => {
		expect(payPalPayment).toHaveProperty("processPayment");
		expect(typeof payPalPayment.processPayment).toBe("function");
	});
});

describe("CashPayment", () => {
	let cashPayment: CashPayment;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		cashPayment = new CashPayment();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should process cash payment", () => {
		cashPayment.processPayment(50);
		expect(consoleSpy).toHaveBeenCalledTimes(2);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			1,
			"Accepting cash payment of $50 at the counter"
		);
		expect(consoleSpy).toHaveBeenNthCalledWith(2, "Counting cash...");
	});

	test("should process payment with different amounts", () => {
		cashPayment.processPayment(75);
		expect(consoleSpy).toHaveBeenCalledWith(
			"Accepting cash payment of $75 at the counter"
		);
	});

	test("should implement OfflinePaymentProcessor interface", () => {
		expect(cashPayment).toHaveProperty("processPayment");
		expect(typeof cashPayment.processPayment).toBe("function");
	});
});

describe("handleOnlinePayment", () => {
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should handle credit card payment through online handler", () => {
		const creditCardPayment = new CreditCardPayment();
		handleOnlinePayment(creditCardPayment, 100);
		expect(consoleSpy).toHaveBeenCalledWith("Starting online payment flow...");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Processing credit card payment of $100"
		);
		expect(consoleSpy).toHaveBeenCalledWith("Online payment completed.");
	});

	test("should handle PayPal payment through online handler", () => {
		const payPalPayment = new PayPalPayment();
		handleOnlinePayment(payPalPayment, 200);
		expect(consoleSpy).toHaveBeenCalledWith("Starting online payment flow...");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Processing PayPal payment of $200"
		);
		expect(consoleSpy).toHaveBeenCalledWith("Online payment completed.");
	});

	test("should process complete online payment flow", () => {
		const creditCardPayment = new CreditCardPayment();
		handleOnlinePayment(creditCardPayment, 150);
		expect(consoleSpy).toHaveBeenCalledTimes(5);
		expect(consoleSpy.mock.calls[0][0]).toBe("Starting online payment flow...");
		expect(consoleSpy.mock.calls[4][0]).toBe("Online payment completed.");
	});
});

describe("handleOfflinePayment", () => {
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should handle cash payment through offline handler", () => {
		const cashPayment = new CashPayment();
		handleOfflinePayment(cashPayment, 50);
		expect(consoleSpy).toHaveBeenCalledWith("Starting offline payment flow...");
		expect(consoleSpy).toHaveBeenCalledWith(
			"Accepting cash payment of $50 at the counter"
		);
		expect(consoleSpy).toHaveBeenCalledWith("Offline payment completed.");
	});

	test("should process complete offline payment flow", () => {
		const cashPayment = new CashPayment();
		handleOfflinePayment(cashPayment, 75);
		expect(consoleSpy).toHaveBeenCalledTimes(4);
		expect(consoleSpy.mock.calls[0][0]).toBe(
			"Starting offline payment flow..."
		);
		expect(consoleSpy.mock.calls[3][0]).toBe("Offline payment completed.");
	});
});
