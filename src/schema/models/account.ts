import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import Track from './track'

@Entity()
@ObjectType()
class Account extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: string

  @Field(() => String)
  @Column()
  readonly name: string

  @Field(() => [Track], { nullable: true })
  @OneToMany(() => Track, (track) => track.account)
  readonly tracks: Track[]
}

export default Account
