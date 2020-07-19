import { InputType, Field } from 'type-graphql'

@InputType()
class CreateTrack {
  @Field()
  readonly information: string

  @Field()
  readonly type: string

  @Field()
  readonly accountId: string
}

export default CreateTrack
