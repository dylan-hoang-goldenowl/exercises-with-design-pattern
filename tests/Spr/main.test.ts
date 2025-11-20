import { Library, Book } from "../../Solid/1.Srp/models";
import { LibraryRepository } from "../../Solid/1.Srp//repositories";
import {
	LibrarySearchService,
	LibraryStatisticsService,
} from "../../Solid/1.Srp/services";

describe("Library", () => {
	let library: Library;
	let book1: Book;
	let book2: Book;
	let libraryRepository: LibraryRepository;

	beforeEach(() => {
		library = new Library();
		libraryRepository = new LibraryRepository(library);

		book1 = new Book("Clean Code", "Edric Cao", 2023);
		book2 = new Book("Design Pattern", "Edric Cao", 2022);
	});

	test("should add a book to the library", () => {
		libraryRepository.addBook(book1);
		expect(libraryRepository.getListBooks()).toContain(book1);
	});

	test("should remove a book by title from the library", () => {
		libraryRepository.addBook(book1);
		libraryRepository.addBook(book2);
		libraryRepository.removeBook("Clean Code");
		expect(libraryRepository.getListBooks()).not.toContain(book1);
		expect(libraryRepository.getListBooks()).toContain(book2);
	});

	test("should not remove any book if title not found", () => {
		libraryRepository.addBook(book1);
		libraryRepository.removeBook("Nonexistent Book");
		expect(libraryRepository.getListBooks().length).toBe(1);
		expect(libraryRepository.getListBooks()).toContain(book1);
	});

	test("should return the total number of books in the library", () => {
		libraryRepository.addBook(book1);
		libraryRepository.addBook(book2);
		expect(libraryRepository.getListBooks().length).toBe(2);
	});

	test("should return an empty list when no books are added", () => {
		expect(libraryRepository.getListBooks().length).toBe(0);
	});
});

describe("BookSearch", () => {
	let books: Book[];
	let library: Library;
	let libraryRepository: LibraryRepository;
	let librarySearchService: LibrarySearchService;

	beforeEach(() => {
		books = [
			new Book("Clean Code", "Edric Cao", 2023),
			new Book("Design Pattern", "Edric Cao", 2022),
			new Book("Refactoring", "Martin Fowler", 2018),
		];

		library = new Library();
		library.books = books;
		libraryRepository = new LibraryRepository(library);
		librarySearchService = new LibrarySearchService(libraryRepository);
	});

	test("should find a book by title", () => {
		const book = librarySearchService.getBookByTitle("Clean Code");
		expect(book).toBeDefined();
		expect(book?.author).toBe("Edric Cao");
	});

	test("should return undefined when no book matches the title", () => {
		const book = librarySearchService.getBookByTitle("Nonexistent Book");
		expect(book).toBeUndefined();
	});

	test("should return books by author", () => {
		const authorBooks = librarySearchService.getBooksByAuthor("Edric Cao");
		expect(authorBooks.length).toBe(2);
		expect(authorBooks).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ title: "Clean Code" }),
				expect.objectContaining({ title: "Design Pattern" }),
			])
		);
	});

	test("should return an empty array when no books match the author", () => {
		const authorBooks = librarySearchService.getBooksByAuthor("Unknown Author");
		expect(authorBooks.length).toBe(0);
	});

	test("should return books by publication year", () => {
		const booksByYear = librarySearchService.getBooksByPublicationYear(2022);
		expect(booksByYear.length).toBe(1);
		expect(booksByYear[0].title).toBe("Design Pattern");
	});

	test("should return an empty array when no books match the publication year", () => {
		const booksByYear = librarySearchService.getBooksByPublicationYear(1999);
		expect(booksByYear.length).toBe(0);
	});
});

describe("LibraryStatistics", () => {
	let library: Library;
	let libraryRepository: LibraryRepository;
	let libraryStatisticsService: LibraryStatisticsService;

	beforeEach(() => {
		library = new Library();
		libraryRepository = new LibraryRepository(library);
		libraryStatisticsService = new LibraryStatisticsService(libraryRepository);
	});

	test("should return 0 when library is empty", () => {
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(0);
	});

	test("should return correct total number of books", () => {
		libraryRepository.addBook(new Book("Clean Code", "Edric Cao", 2023));
		libraryRepository.addBook(new Book("Design Pattern", "Edric Cao", 2022));
		libraryRepository.addBook(new Book("Refactoring", "Martin Fowler", 2018));

		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(3);
	});

	test("should return updated count after adding books", () => {
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(0);

		libraryRepository.addBook(new Book("Clean Code", "Edric Cao", 2023));
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(1);

		libraryRepository.addBook(new Book("Design Pattern", "Edric Cao", 2022));
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(2);
	});

	test("should return updated count after removing books", () => {
		libraryRepository.addBook(new Book("Clean Code", "Edric Cao", 2023));
		libraryRepository.addBook(new Book("Design Pattern", "Edric Cao", 2022));
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(2);

		libraryRepository.removeBook("Clean Code");
		expect(libraryStatisticsService.getTotalNumberOfBooks()).toBe(1);
	});
});
