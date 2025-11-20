import { PrintMachine, FaxMachine, ScanMachine } from "./interfaces";

export class OldFashionedPrinter implements PrintMachine {
	print(document: string): void {
		console.log(`Printing document: ${document}`);
	}
}

export class MultiFunctionMachine
	implements PrintMachine, FaxMachine, ScanMachine
{
	print(document: string): void {
		console.log(`Printing document: ${document}`);
	}
	fax(document: string): void {
		console.log(`Faxing document: ${document}`);
	}
	scan(document: string): void {
		console.log(`Scanning document: ${document}`);
	}
}
