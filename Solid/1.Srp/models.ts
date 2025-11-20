export class Book {
	title: string;
	author: string;
	publicationYear: number;

	constructor(title: string, author: string, publicationYear: number) {
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
	}
}

export class Library {
	books: Book[];

	constructor() {
		this.books = [];
	}
}
