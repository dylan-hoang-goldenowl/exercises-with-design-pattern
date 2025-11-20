export interface PrintMachine {
	print(document: string): void;
}

export interface ScanMachine {
	scan(document: string): void;
}

export interface FaxMachine {
	fax(document: string): void;
}
