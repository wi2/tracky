import { Entity, Column, OneToMany, BaseEntity } from 'typeorm'
import { ObjectType, Field, Arg } from 'type-graphql'
import { Length, IsString, IS_JSON } from 'class-validator'

import Track from './track'

import IAccount from '../interfaces/account'
import ITrack from '../interfaces/track'
import BaseModel from './base-model'

type TitType = { count: number }

@Entity()
@ObjectType()
class Tit extends BaseEntity {
  @Field(() => Number)
  readonly count: number

  // set count(v:number) {
  //   this.count = v
  // }
}

@Entity()
@ObjectType()
class Account extends BaseModel implements IAccount {
  @Column()
  @Length(4, 50)
  @IsString()
  @Field(() => String)
  readonly name: string

  @Column()
  @Field(() => String, { nullable: true })
  readonly description?: string

  @OneToMany(() => Track, (track) => track.account)
  @Field(() => [Track], { nullable: true })
  readonly tracks: ITrack[]

  @Field(() => [Track], { nullable: true })
  tracksChunk(@Arg('skip') skip: number = 0, @Arg('take') take: number = 10) {
    return this.tracks.splice(skip, take)
  }

  @Field(() => [Number, Boolean, Boolean])
  async tracksInfo() {
    return [this.tracks.length, false, true]
  }
}

export default Account
