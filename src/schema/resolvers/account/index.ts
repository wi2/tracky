import {
  Resolver, Query, Mutation, Arg,
} from 'type-graphql'

import Account from '../../models/account'
import CreateAccount from './inputs/create'

const QUERY_OPTIONS = { relations: ['tracks'] }

@Resolver()
class AccountResolver {
  @Query(() => [Account])
  accounts() {
    return Account.find(QUERY_OPTIONS)
  }

  @Query(() => Account)
  account(@Arg('id') id: string) {
    return Account.findOne({
      where: { id },
      ...QUERY_OPTIONS,
    })
  }

  @Mutation(() => Account)
  async accountCreate(@Arg('data') data: CreateAccount) {
    const account = Account.create(data)
    await account.save()
    return account
  }
}

export default AccountResolver
