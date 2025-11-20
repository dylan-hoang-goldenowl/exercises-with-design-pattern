import { CreditCardPayment, PayPalPayment, CashPayment } from "./models";
import { handleOfflinePayment, handleOnlinePayment } from "./handlers";

const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handleOfflinePayment(cashPayment, 50);
