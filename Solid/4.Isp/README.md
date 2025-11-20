Below is a code that violates Interface Segregation Principle. Please refactor and write a test case that covers 100% of the code below.

```
interface Machine {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
}

class OldFashionedPrinter implements Machine {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    scan(document: string): void {
        throw new Error("Scan not supported");
    }

    fax(document: string): void {
        throw new Error("Fax not supported");
    }
}

const printer = new OldFashionedPrinter();
printer.print("Document 1");

printer.scan("Document 2"); // Lỗi: Scan not supported
printer.fax("Document 3");  // Lỗi: Fax not supported
```