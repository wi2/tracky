import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import Account from './account'

@Entity()
@ObjectType()
class Track extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: string

  @Field(() => String)
  @Column()
  readonly information: string

  @Field(() => String)
  @Column()
  readonly type: string

  @Field(() => String)
  @Column()
  readonly accountId: string

  @Field(() => Account)
  @JoinColumn({ name: 'accountId', referencedColumnName: 'id' })
  @ManyToOne(() => Account, (account) => account.tracks)
  readonly account: Account
}

export default Track
