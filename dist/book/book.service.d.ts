import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: Repository<BookEntity>);
    getAll(userId: any): Promise<BookEntity[]>;
    getById(id: string): Promise<BookEntity>;
    create(data: any): Promise<BookEntity[]>;
    update(id: string, data: any): Promise<BookEntity>;
    delete(id: string): Promise<void>;
}
