import {
  Resolver,
  Query,
  ResolveProperty,
  Args,
  Mutation,
} from '@nestjs/graphql';

import { userInfo } from 'os';
import { BookService } from './book.service';

@Resolver()
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query()
  async Books() {
    return await this.bookService.getAll();
  }

  @Query()
  async Book(@Args('id') id: string) {
    return await this.bookService.getById(id);
  }

  @Mutation()
  async createBook(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('image') image: string,
  ) {
    const product = {
      title,
      description,
      image,
    };
    return await this.bookService.create(product);
  }

  @Mutation()
  async updateBook(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('description') description: string,

    @Args('image') image: string,
  ) {
    const product = {
      title,
      description,
      image,
    };
    return await this.bookService.update(id, product);
  }

  @Mutation()
  async deleteBook(@Args('id') id: string) {
    return await this.bookService.delete(id);
  }
}
