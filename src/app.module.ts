import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver} from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      playground: true,
      driver:ApolloDriver
    }),
    BookModule
  ],
})
export class AppModule {}
