import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';

import { BookService } from './book.service';

@Resolver()
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query()
  async Books(@Args('userId') userId: string) {
    return await this.bookService.getAll(userId);
  }

  @Query()
  async Book(@Args('id') id: string) {
    return await this.bookService.getById(id);
  }

  @Mutation()
  async createBook(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('userId') userId: string,
  ) {
    const product = {
      title,
      description,
      userId,
    };
    return await this.bookService.create(product);
  }

  @Mutation()
  async updateBook(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('description') description: string,

    @Args('userId') userId: string,
  ) {
    const product = {
      title,
      description,
      userId,
    };
    return await this.bookService.update(id, product);
  }

  @Mutation()
  async deleteBook(@Args('id') id: string) {
    return await this.bookService.delete(id);
  }
}
