import { InputType, Field } from 'type-graphql'

@InputType()
class CreateAccount {
  @Field()
  readonly name: string
}

export default CreateAccount
