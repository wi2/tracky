import { BaseEntity, PrimaryGeneratedColumn, Entity } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'

import IBase from '../interfaces/base'

@Entity()
@ObjectType()
class BaseModel extends BaseEntity implements IBase {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  readonly id: string
}

export default BaseModel
