import { InputType, Field } from 'type-graphql'

import { IBaseAccount } from '../../interfaces/account'

@InputType()
export class AccountCreateInput implements IBaseAccount {
  @Field() readonly name: string
  @Field() readonly description?: string
}

@InputType()
export class AccountUpdateInput implements IBaseAccount {
  @Field() readonly name: string
  @Field() readonly description?: string
}
