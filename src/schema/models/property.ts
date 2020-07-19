import { Entity, Column, ManyToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { IsNotEmpty, IsIn } from 'class-validator'

import TrackPropertyName from '../enums/track-property-name'
import IProperty from '../interfaces/property'
import BaseModel from './base-model'
import ITrack from '../interfaces/track'
import Track from './track'

@Entity()
@ObjectType()
class Property extends BaseModel implements IProperty {
  @Column()
  @IsIn([TrackPropertyName.URL, TrackPropertyName.VERSION])
  @Field(() => TrackPropertyName)
  readonly name: TrackPropertyName

  @Column()
  @IsNotEmpty()
  @Field(() => String)
  readonly value: string

  @ManyToMany(() => Track, (track) => track.properties)
  @Field(() => [Track], { nullable: true })
  readonly tracks: ITrack[]
}

export default Property
