import { Library, Book } from "./models";

export class LibraryRepository {
	constructor(private library: Library) {}

	addBook(book: Book): void {
		this.library.books.push(book);
	}

	removeBook(title: string): void {
		this.library.books = this.library.books.filter(
			(book) => book.title !== title
		);
	}

	getListBooks(): Book[] {
		return this.library.books;
	}
}
