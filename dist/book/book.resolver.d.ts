import { BookService } from './book.service';
export declare class BookResolver {
    private bookService;
    constructor(bookService: BookService);
    Books(userId: string): Promise<import("./book.entity").BookEntity[]>;
    Book(id: string): Promise<import("./book.entity").BookEntity>;
    createBook(title: string, description: string, userId: string): Promise<import("./book.entity").BookEntity[]>;
    updateBook(id: string, title: string, description: string, userId: string): Promise<import("./book.entity").BookEntity>;
    deleteBook(id: string): Promise<void>;
}
