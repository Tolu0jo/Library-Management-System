import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, BaseEntity } from 'typeorm';

@Entity('book')
export class BookEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'userId'})
  userId: string;
}
