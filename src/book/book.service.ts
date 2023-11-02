import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) { }

  async getAll(userId) {
    return await this.bookRepository.find({
      where:{
        userId
      }
    });
  }

  async getById(id: string) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (book) {
      return book;
    } else {
      throw new NotFoundException();
    }
  }

  async create(data: any) {
    const book = this.bookRepository.create(data);
    await this.bookRepository.save(book);
    return book;
  }

  async update(id: string, data: any) {
    await this.bookRepository.update({ id }, data);
    return this.bookRepository.findOne({ id });
  }

  async delete(id: string) {
    await this.bookRepository.delete({ id });
  }
}
