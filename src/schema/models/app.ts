import { Entity, Column } from 'typeorm'
import { ObjectType, Field, Int, Extensions } from 'type-graphql'
import { IsInt, IsNotEmpty } from 'class-validator'

import IApp from '../interfaces/app'
import BaseModel from './base-model'

@Entity()
@ObjectType()
class App extends BaseModel implements IApp {
  @Column()
  @IsNotEmpty()
  @Field(() => String)
  readonly name: string

  @Column()
  @IsInt()
  @Field(() => Int)
  readonly version: number
}

export default App
