import { Library, Book } from "./models";
import { LibraryRepository } from "./repositories";
import { LibrarySearchService } from "./services";

let library: Library;
library = new Library();

let book1: Book;
book1 = new Book("Clean Code", "Edric Cao", 2023);

let book2: Book;
book2 = new Book("Design Pattern", "Edric Cao", 2022);

let libraryRepository = new LibraryRepository(library);
let librarySearchService = new LibrarySearchService(libraryRepository);

libraryRepository.addBook(book1);
libraryRepository.addBook(book2);
console.log(librarySearchService.getBookByTitle("Clean Code")); // Output: Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }
