import { Mutation, Arg, Resolver } from 'type-graphql'

import Account from '../../models/account'
import Track from '../../models/track'
import generateResolver from '../../helpers/resolvers'
import { TrackCreateInput } from './inputs-type'

const [CreateResolver, ...TrackResolver] = generateResolver(
  Track,
  [{ method: 'create', isAbstract: true, IInput: TrackCreateInput }, 'find', 'findOne'],
  { auth: true },
  { relations: ['account', 'properties'] }
)

@Resolver()
class TrackCustomCreateResolver extends CreateResolver {
  @Mutation(() => Track, { name: 'TrackCreate' })
  async create(@Arg('data') data: TrackCreateInput) {
    const account = await Account.findOne(data.accountId)
    if (!account) {
      throw new Error('Account not found!')
    }
    return super.create(data)
  }
}

export default [TrackCustomCreateResolver, ...TrackResolver]
