import { BaseEntity } from 'typeorm';
export declare class BookEntity extends BaseEntity {
    id: string;
    title: string;
    description: string;
    userId: string;
}
