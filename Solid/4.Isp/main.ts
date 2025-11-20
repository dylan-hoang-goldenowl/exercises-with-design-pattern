import { OldFashionedPrinter, MultiFunctionMachine } from "./models";

const printer = new OldFashionedPrinter();
printer.print("Document 1");

const multiFunctionMachine = new MultiFunctionMachine();
multiFunctionMachine.print("Document 1");
multiFunctionMachine.scan("Document 2");
multiFunctionMachine.fax("Document 3");
