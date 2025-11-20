import { LibraryRepository } from "./repositories";
import { Book } from "./models";

export class LibrarySearchService {
	constructor(private libraryRepo: LibraryRepository) {}

	getBookByTitle(title: string): Book | undefined {
		return this.libraryRepo.getListBooks().find((book) => book.title === title);
	}

	getBooksByAuthor(author: string): Book[] {
		return this.libraryRepo
			.getListBooks()
			.filter((book) => book.author === author);
	}

	getBooksByPublicationYear(publicationYear: number): Book[] {
		return this.libraryRepo
			.getListBooks()
			.filter((book) => book.publicationYear === publicationYear);
	}
}

export class LibraryStatisticsService {
	constructor(private libraryRepo: LibraryRepository) {}

	getTotalNumberOfBooks(): number {
		return this.libraryRepo.getListBooks().length;
	}
}
