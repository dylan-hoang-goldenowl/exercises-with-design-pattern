import {
	OldFashionedPrinter,
	MultiFunctionMachine,
} from "../../Solid/4.Isp/models";

describe("OldFashionedPrinter", () => {
	let printer: OldFashionedPrinter;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		printer = new OldFashionedPrinter();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should print a document", () => {
		printer.print("Document 1");
		expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
	});

	test("should print multiple documents", () => {
		printer.print("First Document");
		printer.print("Second Document");
		expect(consoleSpy).toHaveBeenCalledTimes(2);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			1,
			"Printing document: First Document"
		);
		expect(consoleSpy).toHaveBeenNthCalledWith(
			2,
			"Printing document: Second Document"
		);
	});

	test("should implement PrintMachine interface only", () => {
		expect(printer).toHaveProperty("print");
		expect(typeof printer.print).toBe("function");
		expect(printer).not.toHaveProperty("scan");
		expect(printer).not.toHaveProperty("fax");
	});

	test("should print empty document name", () => {
		printer.print("");
		expect(consoleSpy).toHaveBeenCalledWith("Printing document: ");
	});
});

describe("MultiFunctionMachine", () => {
	let multiFunctionMachine: MultiFunctionMachine;
	let consoleSpy: jest.SpyInstance;

	beforeEach(() => {
		multiFunctionMachine = new MultiFunctionMachine();
		consoleSpy = jest.spyOn(console, "log").mockImplementation();
	});

	afterEach(() => {
		consoleSpy.mockRestore();
	});

	test("should print a document", () => {
		multiFunctionMachine.print("Document 1");
		expect(consoleSpy).toHaveBeenCalledWith("Printing document: Document 1");
	});

	test("should scan a document", () => {
		multiFunctionMachine.scan("Document 2");
		expect(consoleSpy).toHaveBeenCalledWith("Scanning document: Document 2");
	});

	test("should fax a document", () => {
		multiFunctionMachine.fax("Document 3");
		expect(consoleSpy).toHaveBeenCalledWith("Faxing document: Document 3");
	});

	test("should implement all three interfaces", () => {
		expect(multiFunctionMachine).toHaveProperty("print");
		expect(multiFunctionMachine).toHaveProperty("scan");
		expect(multiFunctionMachine).toHaveProperty("fax");
		expect(typeof multiFunctionMachine.print).toBe("function");
		expect(typeof multiFunctionMachine.scan).toBe("function");
		expect(typeof multiFunctionMachine.fax).toBe("function");
	});

	test("should handle multiple operations in sequence", () => {
		multiFunctionMachine.print("Doc A");
		multiFunctionMachine.scan("Doc B");
		multiFunctionMachine.fax("Doc C");
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		expect(consoleSpy).toHaveBeenNthCalledWith(1, "Printing document: Doc A");
		expect(consoleSpy).toHaveBeenNthCalledWith(2, "Scanning document: Doc B");
		expect(consoleSpy).toHaveBeenNthCalledWith(3, "Faxing document: Doc C");
	});

	test("should print, scan, and fax with empty document names", () => {
		multiFunctionMachine.print("");
		multiFunctionMachine.scan("");
		multiFunctionMachine.fax("");
		expect(consoleSpy).toHaveBeenCalledTimes(3);
		expect(consoleSpy).toHaveBeenNthCalledWith(1, "Printing document: ");
		expect(consoleSpy).toHaveBeenNthCalledWith(2, "Scanning document: ");
		expect(consoleSpy).toHaveBeenNthCalledWith(3, "Faxing document: ");
	});
});
