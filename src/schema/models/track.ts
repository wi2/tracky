import { Entity, Column, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { IsNotEmpty, IsIn } from 'class-validator'

import TrackEventType from '../enums/track-event-type'
import ITrack from '../interfaces/track'
import IProperty from '../interfaces/property'
import IAccount from '../interfaces/account'
import BaseModel from './base-model'
import Account from './account'
import Property from './property'

@Entity()
@ObjectType()
class Track extends BaseModel implements ITrack {
  @Column()
  @Field(() => String)
  @IsNotEmpty()
  readonly name: string

  @Column()
  @IsIn([TrackEventType.ACTION, TrackEventType.AUTO, TrackEventType.DISPLAY])
  @Field(() => TrackEventType)
  readonly type: TrackEventType

  @Column()
  @IsNotEmpty()
  @Field(() => String)
  readonly accountId: string

  @JoinColumn({ name: 'accountId', referencedColumnName: 'id' })
  @ManyToOne(() => Account, (account) => account.tracks)
  @Field(() => Account)
  readonly account: IAccount

  @JoinTable()
  @ManyToMany(() => Property, (property) => property.tracks, { cascade: ['insert'] })
  @Field(() => [Property], { nullable: true })
  readonly properties: IProperty[]
}

export default Track
